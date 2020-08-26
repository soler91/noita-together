const { msgTypes, eventTypes, gameFlags } = require("./enums")
const ws = require("ws")
const spellData = require("./assets/spellData.json")
class Noita {
    constructor(parent) {
        this.parent = parent
        this.port = 9090 //get from settings instead
        this.server = new ws.Server({ port: this.port })
        this.serverListener = null
        this.client = null
        this.queueDelay = 5000
        this.queue = []

        this.spellsArray = []
        this.spellsData = {}
        this.init()
    }

    isConnectionLocalhost(ws) {
        const addr = ws._socket.remoteAddress
        return (addr == "::1") || (addr == "127.0.0.1") || (addr == "localhost") || (addr == "::ffff:127.0.0.1")
    }

    init() {
        for (const spell of spellData) {
            this.spellsData[spell.id] = spell
            this.spellsArray.push(spell)
        }

        this.serverListener = this.server.on("connection", (socket) => {
            if (!this.isConnectionLocalhost(socket)) {
                socket.terminate()
                return
            }

            socket.on("message", (data) => {
                this.handleData(data, socket)
            })

            socket.on("close", () => {
                if (this.client === socket) {
                    console.log("BYE NOITA")
                    this.client = null
                }
            })
        })
    }

    handleData(data, ws) {
        let dataJSON = null
        if (data.slice(0, 1) == ">") {
            if (data == ">RES> [no value]") { return }
            //console.log(data)
            return
        } else {
            try {
                dataJSON = JSON.parse(data)
            } catch (e) {
                //console.log(data)
                console.error(e)
                return
            }
        }
        const kind = dataJSON.kind
        const type = dataJSON.type
        if (kind == "heartbeat") {
            this.lastContact = Date.now()
            if (this.client != ws) {
                console.log("Registering game client")
                this.client = ws
                this.toGame(`set_print_to_socket(true)`)
                this.toGame(`GamePrint('Noita and TwitchBot connected.')`)
            }
        }
        //console.log(dataJSON)
        switch (type) {
            case eventTypes.modList:
                const mods = dataJSON.data.split("|")
                console.log(mods.length)
                if (mods.length > 1) {
                    this.toGame(`GamePrintImportant('Please disable all other mods', '')`)
                }
                break;

            case eventTypes.endRun:
                console.log("END RUN")
                this.parent.twitch.say(`#${msgTypes.userDeath};${dataJSON.data}`) // 0 = ded, 1 = win
                break;

            case eventTypes.sendSpells:
                console.log("SEND SPELLS", JSON.stringify(dataJSON))
                this.parent.twitch.say(`#${msgTypes.userSendSpells};${dataJSON.player};${this.spellsToIds(dataJSON.spells)}`)
                break;

            case eventTypes.angerGods:
                this.parent.twitch.say(`#${msgTypes.userAngerGods}`)
                break;

            case eventTypes.sendOrb:
                this.parent.twitch.say(`#${msgTypes.userSendOrb};${dataJSON.data}`)
                break;

            case eventTypes.sendItem:
                this.parent.twitch.say(`#${msgTypes.userSendItem};${dataJSON.player};${dataJSON.data}`)
                break;

            case eventTypes.sendWand:
                this.parent.twitch.say(`#${msgTypes.userSendWand};${dataJSON.player};${dataJSON.data}`)
                break;

            case eventTypes.sendHpPlus:
                this.parent.twitch.say(`#${msgTypes.userSendHpPlus}`)
                break;

            case eventTypes.sendLocation:
                this.parent.twitch.say(`#${msgTypes.userSendLocation};${dataJSON.data}`)
                break;

            case eventTypes.sendGold:
                this.parent.twitch.say(`#${msgTypes.userSendGold};${dataJSON.player};${dataJSON.data}`)
                break;

            default:
                //console.log(dataJSON)
                break;
        }
    }

    toGame(code) {
        if (!this.client) {
            console.log("Push to queue")
            this.queue.push(code)
            return
        }

        this.client.send(code)

        if (this.queue.length > 0) {
            setTimeout(() => {
                this.toGame(this.queue.shift())
            }, this.queueDelay)
        }
    }

    startRun(flags, userlist) {
        console.log("START RUN")
        const code = `
        GameAddFlagRun("nt_run_started");
        player_list("${userlist}")
        ${flags.map(id => `GameAddFlagRun("${gameFlags[id]}")`).join(";\n")}
        `
        console.log(code)
        this.toGame(code)
    }

    endRun(username, type) {
        this.toGame(`run_over("${username}", ${type});`)
    }

    spellsToClient(spells, player) {
        const toSend = []
        for (const index of spells) {
            toSend.push(this.spellsArray[index].id)
        }

        this.toGame(`queue_spells("${toSend.join(",")},","${player}")`)
    }

    spellsToIds(spells) {
        const split = spells.split(",")
        const arr = []

        for (const spell of split) {
            if (spell) {
                console.log(spell)
                arr.push(this.spellsData[spell].i)
            }
        }
        return arr.join(",")
    }

    goldToClient(amount, player) {
        this.toGame(`queue_gold(${amount}, "${player}")`)
    }

    itemsToClient(data, player) {

    }

    wandToClient(data, player) {

    }

    hpPlusToClient(player) {
        this.toGame(`add_hp("${player}")`)
    }

    orbToClient(player, id) {
        this.toGame(`force_orb(${id}, "${player}")`)
    }

    locationToClient(player, data) {
        const code = `update_player_location("${player}", "${data}")`
        console.log(code)
        this.toGame(code)
    }

    userListToClient(list) {
        this.toGame(`player_list("${list}")`)
    }

    angerGodsToClient(player) {
        this.toGame(`anger_gods("${player}")`)
    }


}

module.exports = Noita