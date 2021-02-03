const { ipcMain } = require("electron")
const ws = require("ws")
const messageHandler = require("./proto/messageHandler")
const appEvent = require("./appEvent")
let client = null

/* Game Stuff huh move somewhere else later*/
const noita = require("./noita")
let playerList = {}
let roomFlags = []
let spellList = []
let bank = {}
let userId = null
let host = false
const lobby = { //move this later
    sHostStart: (payload) => { },
    sUserBanned: (payload) => {
        if (payload.userId == userId) {
            resetGame()
        }
        else {
            removePlayer(payload.userId)
        }
    },
    sUserKicked: (payload) => {
        if (payload.userId == userId) {
            resetGame()
        }
        else {
            removePlayer(payload.userId)
        }
    },
    sUserLeftRoom: (payload) => {
        if (payload.userId == userId) {
            resetGame()
        }
        else {
            removePlayer(payload.userId)
        }
    },
    sUserJoinedRoom: (payload) => {
        addPlayer(payload)
    },
    sJoinRoomSuccess: (payload) => {
        for (const player of payload.users) {
            addPlayer({userId: player.userId, name: player.name})
        }
    },
    sRoomFlagsUpdated: (payload) => { },
    sRoomCreated: (payload) => {
        host = true
    },
    sRoomDeleted: (payload) => {
        resetGame()
    },
}
noita.on("GAME_OPEN", () => {
    console.log("Game open bs ?? ")
    noita.toGame({ event: "RequestGameInfo", payload: {} })
    noita.toGame({ event: "RequestSpellList", payload: {} })
    noita.once("GameInfo", (event) => {
        console.log({ event })
        const msg = messageHandler.encodeLobbyMsg("cReadyState", {
            ready: true,
            seed: event.seed,
            mods: event.mods
        })
    })
    noita.once("GametSpellList", (event) => {
        console.log({ event })
        spellList = event.spells
    })
})
noita.on("GAME_CLOSE", () => {
    //do we care ? unready maybe ?
    const msg = messageHandler.encodeLobbyMsg("cReadyState", {
        ready: false
    })
})
noita.on("PlayerMove", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerMove", event)
    sendMsg(msg)
})
noita.on("RequestPlayerList", () => {
    for (const player in playerList) {
        if (player == userId) {continue}
        noita.toGame({ event: "AddPlayer", payload: playerList[player] })
    }
})

function sendMsg(data) {
    if (client) {
        client.send(data)
    }
    else {
        console.log("HHHUUUUH help")
    }
}

function resetGame() {
    roomFlags = []
    playerList = {}
    spellList = []
    bank = {}
}
function addPlayer(data) {
    console.log("ADD PLAYER")
    console.log({data})
    if (data.userId == userId) { return }
    playerList[data.userId] = data
    noita.toGame({ event: "AddPlayer", payload: data })
}
function removePlayer(userId) {
    delete playerList[userId]
    noita.toGame({ event: "RemovePlayer", payload: { userId } })
}

ipcMain.on("LEAVE_ROOM", () => {
    playerList = {}
})

module.exports = (data) => {
    const { token, id } = data
    userId = id
    client = new ws(`wss://nt.unicast.link:42069/${token}`)

    client.on("open", () => {
        appEvent("CONNECTED", data)
        ipcMain.on("CLIENT_MESSAGE", (event, data) => {
            const msg = messageHandler.encodeLobbyMsg(data.key, data.payload)
            client.send(msg)
            console.log(data)
            console.log(msg)
        })
        ipcMain.on("CLIENT_CHAT", (event, data) => {
            const msg = messageHandler.encodeGameMsg(data.key, data.payload)
            console.log(data)
            console.log(msg)
            client.send(msg)
        })
    })

    client.on("message", (data) => {
        //console.log(`[d]${data}`)
        try {
            const { gameAction, lobbyAction } = messageHandler.decode(data)
            console.log({ gameAction, lobbyAction })
            let payload
            let key
            if (gameAction) {
                key = Object.keys(gameAction).shift()
                payload = gameAction[key]
                console.log("[server]")
                console.log({ key, payload })
                if (key == "sChat") {
                    appEvent(key, payload)
                }
                noita.toGame({ event: key.substr(1), payload })
                //if (key && payload) { gameController[key](ws, payload) }
            }
            else if (lobbyAction) {
                key = Object.keys(lobbyAction).shift()
                payload = lobbyAction[key]
                console.log(key)
                console.log(payload)
                if (key && payload) {
                    //appEvent("DEBUG_EVT", { key, payload })
                    console.log("[server]")
                    console.log({ key, payload })
                    if (typeof lobby[key] == "function") {lobby[key](payload)}
                    appEvent(key, payload)
                    //lobbyController[key](ws, payload) 
                }
            }
        } catch (error) {
            //eugh
            console.log(error)
        }
    })

    client.on("close", () => {
        appEvent("CONNECTION_LOST")
        client.terminate()
        client = null
    })
}