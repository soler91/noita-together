const { v4: uuidv4 } = require("uuid")
const { ipcMain } = require("electron")
const ws = require("ws")
const messageHandler = require("./proto/messageHandler")
const appEvent = require("./appEvent")
const noita = require("./noita")
const host = "wss://nt.unicast.link:42069/"
const print = true
module.exports = (data) => {
    const user = { userId: data.id, name: data.display_name }
    noita.setUser({userId: user.userId, name: user.name, host: false})
    let isHost = false
    let client = new ws(`${host}${data.token}`)
    const lobby = {
        sHostStart: (payload) => {
            if (isHost) {
                const msg = messageHandler.encodeGameMsg("cHostItemBank", {
                    wands: noita.bank.wands,
                    spells: noita.bank.spells,
                    items: noita.bank.flasks,
                    gold: noita.bank.gold
                })
                sendMsg(msg)
            }
            noita.sendEvt("StartRun")
        },
        sUserBanned: (payload) => {
            if (payload.userId == user.userId) {
                noita.reset()
            }
            else {
                noita.removePlayer(payload)
            }
        },
        sUserKicked: (payload) => {
            if (payload.userId == user.userId) {
                noita.reset()
            }
            else {
                noita.removePlayer(payload)
            }
        },
        sUserLeftRoom: (payload) => {
            if (payload.userId == user.userId) {
                noita.reset()
            }
            else {
                noita.removePlayer(payload)
            }
        },
        sUserJoinedRoom: (payload) => {
            noita.addPlayer(payload)
        },
        sJoinRoomSuccess: (payload) => {
            noita.rejectConnections = false
            for (const player of payload.users) {
                if (player.userId == user.userId) { continue }
                noita.addPlayer({ userId: player.userId, name: player.name })
            }
        },
        sRoomFlagsUpdated: (payload) => {
            noita.updateFlags(payload.flags)
        },
        sRoomCreated: (payload) => {
            noita.rejectConnections = false
            noita.setHost(true)
            isHost = true
        },
        sRoomDeleted: (payload) => {
            noita.reset()
        },
    }

    client.on("open", () => {
        appEvent("CONNECTED", data)
    })

    client.on("close", () => {
        appEvent("CONNECTION_LOST")
        client.terminate()
        client = null
    })

    client.on("message", (data) => {
        try {
            const { gameAction, lobbyAction } = messageHandler.decode(data)
            let payload
            let key
            if (gameAction) {
                key = Object.keys(gameAction).shift()
                payload = gameAction[key]
                if (key == "sChat") { appEvent(key, payload) }
                if (typeof noita[key] == "function") {
                    noita[key](payload)
                }
            }
            else if (lobbyAction) {
                key = Object.keys(lobbyAction).shift()
                payload = lobbyAction[key]
                if (key && payload) {
                    if (typeof lobby[key] == "function") { lobby[key](payload) }
                    appEvent(key, payload)
                }
            }
            //if (["sPlayerMove", "sPlayerUpdate", "sChat"].indexOf(key) > -1) { return }
            //console.log(`[SERVER ${key}]`)
            //console.log(payload)
            //console.log()
        } catch (error) {
            //eugh
            console.log(error)
        }
    })

    ipcMain.on("CLIENT_MESSAGE", (e, data) => {
        const msg = messageHandler.encodeLobbyMsg(data.key, data.payload)
        sendMsg(msg)
    })

    ipcMain.on("CLIENT_CHAT", (e, data) => {
        const msg = messageHandler.encodeGameMsg(data.key, data.payload)
        sendMsg(msg)
    })

    noita.on("GAME_OPEN", () => {
        noita.sendEvt("RequestGameInfo")
        noita.sendEvt("RequestSpellList")

        noita.once("GameInfo", (event) => {
            const msg = messageHandler.encodeLobbyMsg("cReadyState", {
                ready: true,
                seed: event.seed,
                mods: event.mods
            })
            sendMsg(msg)
        })
    })

    noita.on("GAME_CLOSE", () => {
        unready()
    })

    noita.on("PlayerMove", (event) => {
        const msg = messageHandler.encodeGameMsg("cPlayerMove", event)
        sendMsg(msg)
    })

    noita.on("PlayerUpdate", (event) => {
        const msg = messageHandler.encodeGameMsg("cPlayerUpdate", event)
        sendMsg(msg)
    })

    noita.on("PlayerPickup", (event) => {
        const msg = messageHandler.encodeGameMsg("cPlayerPickup", event)
        sendMsg(msg)
    })

    noita.on("PlayerDeath", (event) => {
        const msg = messageHandler.encodeGameMsg("cPlayerDeath", event)
        sendMsg(msg)
        unready()
    })

    noita.on("RunOver", () => {
        unready()
    })

    noita.on("SendGold", (event) => {
        const msg = messageHandler.encodeGameMsg("cPlayerAddGold", event)
        sendMsg(msg)
    })

    noita.on("TakeGold", (event) => {
        const msg = messageHandler.encodeGameMsg("cPlayerTakeGold", event)
        sendMsg(msg)
    })

    noita.on("SendItems", (event) => {
        const payload = {}
        if (event.spells) {
            const spells = event.spells.map(mapSpells)
            payload.spells = { list: spells }
        }
        else if (event.flasks) {
            const flasks = event.flasks.map(mapFlasks)
            payload.flasks = { list: flasks }
        }
        else if (event.wands) {
            const wands = event.wands.map(mapWands)
            payload.wands = {list: wands}
        }
        const msg = messageHandler.encodeGameMsg("cPlayerAddItem", payload)
        sendMsg(msg)
    })

    noita.on("PlayerTake", (event) => {
        const msg = messageHandler.encodeGameMsg("cPlayerTakeItem", event)
        sendMsg(msg)
    })

    noita.on("HostTake", (event) => {
        const msg = messageHandler.encodeGameMsg("cHostUserTake", event)
        sendMsg(msg)
    })

    noita.on("HostTakeGold", (event) => {
        const msg = messageHandler.encodeGameMsg("cHostUserTakeGold", event)
        sendMsg(msg)
    })

    noita.on("CustomModEvent", (event) => {
        const payload = JSON.stringify(event)
        const msg = messageHandler.encodeGameMsg("cCustomModEvent", {payload})
        sendMsg(msg)
    })

    function sendMsg(msg) {
        if (client != null) {
            client.send(msg)
        }
    }

    function unready() {
        const msg = messageHandler.encodeLobbyMsg("cReadyState", {
            ready: false,
            seed: "",
            mods: []
        })
        sendMsg(msg)
    }

    function mapWands(wand) {
        return {
            id: uuidv4(),
            stats: keysToCamel(wand.stats),
            alwaysCast: wand.always_cast ? wand.always_cast.map(mapSpells) : undefined,
            deck: wand.deck.map(mapSpells)
        }
    }

    function mapSpells(spell) {
        return {
            id: uuidv4(),
            gameId: spell.id,
            usesRemaining: spell.usesRemaining,
            sentBy: user.userId
        }
    }

    function mapFlasks(val) {
        return {
            id: uuidv4(),
            isChest: val.isChest,
            color: {
                r: (val.color & 0xff) / 193,
                g: ((val.color >> 8) & 0xff) / 193.5,
                b: ((val.color >> 16) & 0xff) / 193
            },
            content: val.content,
            sentBy: user.userId
        }
    }

    function toCamel(str) {
        return str.replace(/([_][a-z])/ig, ($1) => {
            return $1.toUpperCase()
                .replace('_', '');
        });
    }

    function keysToCamel(obj) {
        const n = {};
        for (const key of Object.keys(obj)) {
            n[toCamel(key)] = obj[key]
        }
        return n;
    }
}