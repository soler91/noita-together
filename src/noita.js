const EventEmitter = require("events")
const path = require("path")
const ws = require("ws")
const { v4: uuidv4 } = require("uuid")
const appEvent = require("./appEvent")
import { ipcMain } from 'electron'
function sysMsg(message) {
    appEvent("sChat", {
        id: uuidv4(),
        userId: "-1",
        name: "[System]",
        message
    })
}
class NoitaGame extends EventEmitter {
    constructor() {
        super()
        this.setMaxListeners(0)
        this.port = 1234
        this.server = null

        this.client = null
        this.paused = false
        this.queue = []
        this.queueDelay = 5000

        this.rejectConnections = true
        this.user = { userId: 0, name: "", host: false }
        this.spellList = []
        this.gameFlags = []
        this.players = {}
        this.bank = {
            wands: [],
            spells: [],
            flasks: [],
            gold: 0
        }
        ipcMain.once("game_listen", () => {
            this.gameListen()
        })
    }

    isConnectionLocalhost(ws) {
        const addr = ws._socket.remoteAddress
        return (addr == "::1") || (addr == "127.0.0.1") || (addr == "localhost") || (addr == "::ffff:127.0.0.1")
    }

    gameListen() {
        if (!this.server) {
            this.server = new ws.Server({ port: this.port })
        }
        this.server.on("connection", (socket) => {
            console.log("[Game WS] New connection(?)")
            if (!this.isConnectionLocalhost(socket) || this.rejectConnections) {
                console.log("terminate")
                socket.terminate()
                return
            }

            socket.on("message", (data) => { this.gameMessage(data, socket) })

            socket.on("close", () => {
                if (this.client === socket) {
                    console.log("[Game] Disconnected.")
                    this.client = null
                    this.emit("GAME_CLOSE")
                }
            })
        })

        this.on("GameSpellList", (payload) => { this.setSpellList(payload) })
        this.on("RequestPlayerList", () => {
            this.sendPlayerList()
            this.sendEvt("UpdateFlags", this.gameFlags)
        })
        this.on("PlayerDeath", () => {
            this.bank = {
                wands: [],
                spells: [],
                flasks: [],
                gold: 0
            }
        })
        this.on("RunOver", () => {
            this.bank = {
                wands: [],
                spells: [],
                flasks: [],
                gold: 0
            }
        })
    }
    // event and ping
    // {event: "", payload: {}}
    gameMessage(data, socket) {
        let dataJSON = null
        if (data.slice(0, 1) == ">") {
            if (data == ">RES> [no value]") { return }
            else {
                console.log(data)
                return
            }
        }
        else {
            try {
                dataJSON = JSON.parse(data)
            } catch (e) {
                console.log("[Game] Error parsing game message.")
                console.error(e)
                return
            }
        }
        if (dataJSON.event == "ping") {
            if (!this.client) {
                console.log("[Game] Connected.")
                this.client = socket
                this.emit("GAME_OPEN")
                this.bankToGame()
            }
        }
        else {
            /*
            console.log({ dataJSON })
            console.log()
            */
            this.emit(dataJSON.event, dataJSON.payload)
        }
    }

    get isPaused() {
        return this.paused
    }

    get isHost() {
        return this.user.host
    }

    setUser(user) {
        this.user = user
    }

    setHost(val) { this.user.host = val }

    sendEvt(key, payload = {}) {
        this.toGame({ event: key, payload })
    }

    toGame(obj = {}) {
        const evt = JSON.stringify(obj)
        if (!this.client) {
            console.log("[Game] Pushed code to queue.")
            this.queue.push(evt)
            return
        }
        this.client.send(evt)

        if (this.queue.length > 0) {
            setTimeout(() => {
                this.toGame(this.queue.shift())
            }, this.queueDelay);
        }
    }

    updateFlags(data) {
        data.push({ flag: "NT_GAMEMODE_CO_OP" })//hardcode this for now :) <3
        this.gameFlags = data
        this.sendEvt("UpdateFlags", data)
    }

    addPlayer(data) {
        this.players[data.userId] = data
        if (!this.client) { return }
        this.sendEvt("AddPlayer", data)
    }

    removePlayer(data) {
        delete this.players[data.userId]
        this.sendEvt("RemovePlayer", data)
    }

    bankToGame() {
        const bank = []
        for (const wand of this.bank.wands) {
            bank.push(wand)
        }
        for (const spell of this.bank.spells) {
            bank.push(spell)
        }
        for (const item of this.bank.flasks) {
            bank.push(item)
        }
        this.sendEvt("ItemBank", { items: bank, gold: this.bank.gold })
    }

    setSpellList(data) {

    }

    sendPlayerList() {
        for (let player in this.players) {
            this.sendEvt("AddPlayer", this.players[player])
        }
    }

    reset() {
        this.setHost(false)
        this.rejectConnections = true
        this.spellList = []
        this.gameFlags = []
        this.players = {}
        this.bank = {
            wands: [],
            spells: [],
            flasks: [],
            gold: 0
        }
    }

    sPlayerMove(payload) {
        if (payload.userId == this.user.userId || !this.client) {
            return
        }
        this.sendEvt("PlayerMove", payload)
    }
    sPlayerUpdate(payload) {
        if (payload.userId == this.user.userId) {
            return
        }
        this.sendEvt("PlayerUpdate", payload)
    }
    sPlayerUpdateInventory(payload) {
        if (payload.userId == this.user.userId) { return }
        this.sendEvt("PlayerUpdateInventory", payload)
    }
    sHostItemBank(payload) {
        this.bank = {
            wands: payload.wands,
            spells: payload.spells,
            flasks: payload.items,
            gold: payload.gold
        }
        this.bankToGame()
    }
    sHostUserTake(payload) {
        if (!payload.success) {
            if (payload.userId == this.user.userId) {
                this.sendEvt("UserTakeFailed", payload)
            }
            return
        }
        for (const key in this.bank) {
            if (key == "gold") { continue }
            for (const [index, item] of this.bank[key].entries()) {
                if (item.id == payload.id) {
                    this.bank[key].splice(index, 1)
                    this.sendEvt("UserTakeSuccess", { me: payload.userId == this.user.userId, ...payload })
                }
            }
        }
    }
    sPlayerAddItem(payload) {
        const data = { flasks: payload.flasks, spells: payload.spells, wands: payload.wands }
        const items = []

        for (const key in data) {
            if (!data[key]) { continue }
            for (const item of data[key].list) {
                this.bank[key].push(item)
                items.push(item)
            }
        }

        this.sendEvt("UserAddItems", { userId: payload.userId, items })//filter later?
    }
    sPlayerAddGold(payload) {
        this.bank.gold += payload.amount
        this.sendEvt("UserAddGold", payload)
    }
    sPlayerTakeGold(payload) {
        if (!this.isHost) { return }
        if (this.bank.gold >= payload.amount) {
            this.emit("HostTakeGold", { userId: payload.userId, amount: payload.amount, success: true })
        }
        else {
            this.emit("HostTakeGold", { userId: payload.userId, amount: payload.amount, success: false })
        }
    }
    sHostUserTakeGold(payload) {
        if (payload.success) {
            this.bank.gold -= payload.amount
            this.sendEvt("UserTakeGoldSuccess", { me: payload.userId == this.user.userId, ...payload })
        }
        else if (payload.userId == this.user.userId) {
            this.sendEvt("UserTakeGoldFailed", { me: payload.userId == this.user.userId, ...payload })
        }
    }
    sPlayerTakeItem(payload) {
        if (!this.isHost) { return }
        for (const key in this.bank) {
            if (key == "gold") { continue }
            for (const item of this.bank[key]) {
                if (item.id == payload.id) {
                    this.emit("HostTake", { userId: payload.userId, id: payload.id, success: true })
                    return
                }
            }
        }
        this.emit("HostTake", { userId: payload.userId, id: payload.id, success: false })
    }
    sPlayerPickup(payload) {
        console.log("[PICKUP]")
        console.log({ payload })
        if (payload.userId == this.user.userId) { return }
        this.sendEvt("PlayerPickup", payload)
        const player = this.players[payload.userId]
        if (player) {
            sysMsg(`${player.name} picked up a ${typeof payload.heart != "undefined" ? "heart" : "orb"}.`)
        }
    }
    sPlayerDeath(payload) {
        if (payload.userId == this.user.userId) { return }
        this.sendEvt("PlayerDeath", payload)
        const player = this.players[payload.userId]
        if (player) {
            sysMsg(`${player.name} has died.`)
        }
    }
    //sPlayerNewGamePlus (payload) => {},
    sPlayerSecretHourglass(payload) {
        if (payload.userId == this.user.userId) { return }
        this.sendEvt("SecretHourglass", payload)
    }
    sCustomModEvent(payload) {
        if (payload.userId == this.user.userId) { return }
        try {
            this.sendEvt("CustomModEvent", { userId: payload.userId, ...JSON.parse(payload.payload) })
        } catch (error) {

        }
    }
    sRespawnPenalty(payload) {
        if (payload.userId == this.user.userId) { return }
        this.sendEvt("RespawnPenalty", payload)
        const player = this.players[payload.userId]
        if (player) {
            sysMsg(`${player.name} had to respawn against his will.`)
        }
    }
    sAngerySteve(payload) {
        if (payload.userId == this.user.userId) { return }
        this.sendEvt("AngerySteve", payload)
        const player = this.players[payload.userId]
        if (player) {
            sysMsg(`${player.name} has angered the gods.`)
        }
    }
    /*
    sNemesisPickupItem (payload) => {},
    sNemesisAbility (payload) => {},
    */
    sChat(payload) {
        this.sendEvt("Chat", payload)
    }
}

module.exports = new NoitaGame()