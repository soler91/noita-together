const { ipcMain, webContents } = require('electron')
const { msgTypes, gameFlags } = require("./enums")
const tmi = require("tmi.js")
class Twitch {
    constructor(parent) {
        this.parent = parent
        this.client = null
        this.channel = ""
        this.username = ""
        this.hostUsername = ""

        this.joinTimeout = null
        this.joinPromise = null
        this.joining = false
        this.joined = false

        this.users = {}
        this.usernames = {}
        this.userlist = []
        this.acceptTimeout = null
        this.acceptDelay = 5000
        this.acceptQueue = []

        this.gameFlags = []
        this.activeFlags = []

        this.lastSent = Date.now()
        this.msgQueue = []
        this.queueInterval = null

        this.blacklist = []
        this.init()
    }

    get isHost() {
        return this.username.toLowerCase() == this.hostUsername.toLowerCase()
    }

    init() {
        ipcMain.on("GAME_FLAGS", (event, data) => {
            console.log(data)
            this.gameFlags = data
        })

        ipcMain.on("TWITCH_USERLIST", async (event, data) => {
            try {
                event.sender.send("USERLIST", this.users)
            } catch (error) {

            }
        })

        ipcMain.on("TWITCH_CONNECT", async (event, data) => {
            try {
                await this.connect({ username: data.username, password: data.oauth })
                event.sender.send("TWITCH_CONNECTED")
            } catch (error) {

            }
        })

        ipcMain.on("TWITCH_JOIN", async (event, data) => {
            try {
                await this.join(data)
                const join = new Promise((res) => {
                    this.joinPromise = res
                })
                clearTimeout(this.joinTimeout)
                const timeout = new Promise((res, reject) => {
                    this.joinTimeout = setTimeout(() => {
                        clearTimeout(this.joinTimeout)
                        reject()
                    }, 10000);
                })
                await Promise.race([join, timeout])

                event.sender.send("TWITCH_JOINED")
            } catch (error) {
            }
        })

        ipcMain.on("TWITCH_READYSTATE", async (event, data) => {
            await this.say(`#${msgTypes.userReadyState};${data.state}`)
            setTimeout(() => {
                event.sender.send("TWITCH_READYSTATE_REPLY")
            }, 1500);
        })

        ipcMain.on("TWITCH_KICK", async (event, data) => {
            this.kickUser(data.name)
            /*
            setTimeout(() => {
                event.sender.send("TWITCH_KICK_REPLY")
            }, 1500);
            */
        })

        ipcMain.on("START_RUN", () => {
            this.startRun()
        })
    }

    listen() {
        this.client.on("message", (ch, userstate, message, self) => {
            if (self && !this.username) { this.username = userstate["display-name"] }
            let msg = Buffer.from(message, "base64")
            msg = msg.toString()
            if (!msg.startsWith("#")) { return }

            this.parseMsg(userstate, msg)
        })

        this.queueInterval = setInterval(() => {
            if (this.msgQueue.length == 0 || this.client.readyState() != "OPEN") { return }
            console.log(this.msgQueue)
            if (Date.now() - this.lastSent >= 3000) {
                this.say(this.msgQueue.shift())
                console.log(this.msgQueue)
            }
        }, 500);
    }

    parseMsg(userstate, msg) {
        let targetUser = "-"
        const username = userstate["display-name"]
        const splitMsg = msg.split(";")
        const msgId = splitMsg.shift().substr(1)
        if (this.blacklist.indexOf(username) > -1) { return }
        switch (msgId) {
            case msgTypes.hostAccept:
                if (!this.joining) { return }
                const acceptedUsers = splitMsg.shift().split(",")
                if (acceptedUsers.indexOf(this.username) > -1) {
                    this.joining = false
                    this.joined = true
                    this.joinPromise()
                    this.joinPromise = null
                }
                break;

            case msgTypes.hostStart:
                if (username.toLowerCase() == this.hostUsername.toLowerCase()) {
                    const flags = splitMsg.shift().split(",")
                    const users = splitMsg.shift().split(",")
                    this.userlist = users
                    this.activeFlags = flags.map(v => gameFlags[v])
                    const filtered = users.filter((name) => name.toLowerCase() !== this.username.toLowerCase())
                    this.parent.noita.startRun(flags, filtered.join(","))
                }
                break;

            case msgTypes.userDeath:
                if (this.userlist.indexOf(username) === -1) { return }
                const type = splitMsg.shift()
                this.parent.noita.endRun(username, type)
                break;

            case msgTypes.userJoin:
                if (!this.isHost) { return }
                //const user = splitMsg.shift()
                //if (user != username) { return }
                this.addUser(username)
                this.acceptQueue.push(username)

                if (!this.acceptTimeout) {
                    this.acceptTimeout = setTimeout(() => {
                        this.say(`#${msgTypes.hostAccept};${this.acceptQueue.join(",")}`)
                        this.acceptQueue = []
                        clearTimeout(this.acceptTimeout)
                        this.acceptTimeout = null
                    }, this.acceptDelay);
                }
                break;

            case msgTypes.userReadyState:
                if (!this.isHost) { return }
                if (typeof this.users[username] == "undefined") { return }
                const state = splitMsg.shift()
                this.readyUser(username, state)
                break;

            case msgTypes.userSendSpells:
                if (this.userlist.indexOf(username) === -1) { return }
                targetUser = splitMsg.shift()
                if (this.username == targetUser) {
                    const spells = splitMsg.shift()
                    this.parent.noita.spellsToClient(spells.split(","), username)
                }
                break;

            case msgTypes.userSendGold:
                if (this.activeFlags.indexOf("can_send_gold") === -1) { return } //enum fail idk man
                if (this.userlist.indexOf(username) === -1) { return }
                targetUser = splitMsg.shift()
                if (this.username == targetUser) {
                    const amount = splitMsg.shift()
                    this.parent.noita.goldToClient(amount, username)
                }
                break;

            case msgTypes.userSendItem:
                if (this.activeFlags.indexOf("can_send_items") === -1) { return } //enum fail idk man
                if (this.userlist.indexOf(username) === -1) { return }
                targetUser = splitMsg.shift()
                if (this.username == targetUser) {
                    const items = splitMsg.shift()
                    this.parent.noita.itemsToClient(items, username)
                }
                break;

            case msgTypes.userSendWand:
                if (this.activeFlags.indexOf("can_send_wands") === -1) { return } //enum fail idk man
                if (this.userlist.indexOf(username) === -1) { return }
                targetUser = splitMsg.shift()
                if (this.username == targetUser) {
                    const wand = splitMsg.shift()
                    this.parent.noita.wandToClient(wand, username)
                }
                break;

            case msgTypes.userAngerGods:
                if (this.activeFlags.indexOf("sync_gods_mood") === -1) { return } //enum fail idk man
                if (this.username.toLowerCase() == username.toLowerCase()) { return }
                if (this.userlist.indexOf(username) === -1) { return }
                this.parent.noita.angerGodsToClient(username)

                break;

            case msgTypes.userSendOrb:
                if (this.activeFlags.indexOf("sync_orbs") === -1) { return } //enum fail idk man
                if (this.username.toLowerCase() == username.toLowerCase()) { return }
                if (this.userlist.indexOf(username) === -1) { return }
                const orbId = splitMsg.shift()
                this.parent.noita.orbToClient(username, orbId)
                break;

            case msgTypes.userSendHpPlus:
                if (this.activeFlags.indexOf("share_hp_plus") === -1) { return } //enum fail idk man
                if (this.username.toLowerCase() == username.toLowerCase()) { return }
                if (this.userlist.indexOf(username) === -1) { return }
                this.parent.noita.hpPlusToClient(username)
                break;

            case msgTypes.userSendLocation:
                if (this.username.toLowerCase() == username.toLowerCase()) { return }
                if (this.userlist.indexOf(username) === -1) { return }
                const location = splitMsg.shift()
                this.parent.noita.locationToClient(username, location)
                break;

            case msgTypes.hostKick:
                if (username.toLowerCase() == this.hostUsername.toLowerCase()) {
                    const kicked = splitMsg.shift()
                    const idx = this.userlist.indexOf(kicked)
                    console.log(`User index: ${idx}`)
                    console.log(this.userlist)
                    if (idx > -1) {
                        this.userlist.splice(idx, 1)
                        const filtered = this.userlist.filter((name) => name.toLowerCase() !== this.username.toLowerCase())
                        this.parent.noita.userListToClient(filtered.join(","))
                    }
                }
                break;

            default:
                break;
        }
    }

    async connect(identity) {
        try {
            this.client = new tmi.client({
                connection: { reconnect: true },
                identity
            })
            console.log("Connecting to twitch")
            await this.client.connect()
            console.log("Connected to twitch")
            this.listen()
        } catch (error) {
            console.log(error)
        }
    }

    async join(payload) {
        try {
            const { channel } = payload
            const channels = this.client.getChannels()
            if (channels.length > 0) {
                await this.client.part(channels.shift())
            }
            console.log(`Joining "${channel}"`)
            await this.client.join(channel)
            console.log("Joined succesfully ???")
            this.channel = channel
            this.hostUsername = payload.host
            await this.say(`#${msgTypes.userJoin};${this.username}`)
            this.joining = true
        } catch (error) {
            console.log(error)
        }
    }

    say(msg) {
        try {
            if (Date.now() - this.lastSent < 3000) {
                this.msgQueue.push(msg)
                return
            }
            this.lastSent = Date.now()
            const message = Buffer.from(msg)
            return this.client.say(this.channel, message.toString('base64'))
        } catch (error) {
            console.log(error)
            this.msgQueue.push(msg)
        }
    }

    kickUser(name) {
        this.blacklist.push(name)
        delete this.users[name]
        this.say(`#${msgTypes.hostKick};${name}`)
        this.appEvent("USER_REMOVE", { name })
    }

    addUser(name) {
        this.users[name] = false
        if (name.toLowerCase() != this.username.toLowerCase()) {
            this.appEvent("USER_ADD", { name, state: false })
        }
    }

    readyUser(name, userState) {
        const state = userState == "true" ? true : false
        this.users[name] = state
        this.appEvent("USER_READYSTATE", { name, state })
    }

    async readyState(state) {
        try {
            if (!this.joined) { return }
            this.appEvent("GAME_STATUS", { state })
            await this.say(`#${msgTypes.userReadyState};${state}`)
        } catch (error) {

        }

    }

    unreadyAll() {
        if (!this.isHost) { return }
        const users = Object.keys(this.users).filter((name) => name.toLowerCase() !== this.username.toLowerCase())
        for (const name of users) {
            this.users[name] = false
            this.appEvent("USER_READYSTATE", { name, state: false })
        }
    }

    startRun() {
        const users = Object.keys(this.users).join(",")
        this.say(`#${msgTypes.hostStart};${this.gameFlags.join(",")};${users}`)
    }

    appEvent(event, data) {
        webContents.getAllWebContents().forEach(content => {
            content.send(event, data)
        })
    }
}

module.exports = Twitch