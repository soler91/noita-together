'use strict'
import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require("path")
const fs = require("fs")
const Twitch = require("./twitch")
const Noita = require("./noita")
const instances = {}
instances.noita = new Noita(instances)
instances.twitch = new Twitch(instances)


const twitch = instances.twitch
/* Find Noita install folder */
let gamePaths = []
let spawn = require("child_process").spawn, child;
child = spawn("powershell.exe", [
    `
    (Get-Item "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Steam App 881100").GetValue("InstallLocation")
    (Get-Item "HKLM:\\SOFTWARE\\WOW6432Node\\GOG.com\\Games\\1310457090").GetValue("path")
    `
]);
child.stdout.on("data", function (data) {
    gamePaths.push(data.toString())
});
child.stdin.end()



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        transparent: false,
        title: "Noita Together",
        thickFrame: true,
        width: 400,
        height: 600,
        frame: false,
        backgroundColor: '#2e2c29',
        resizable: true,
        webPreferences: {
            // Use pluginOptions.nodeIntegration, leave this alone
            // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html')
    }

    win.on('closed', () => {
        win = null
    })//
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        try {
            await installExtension(VUEJS_DEVTOOLS)
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
    }
    createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}

ipcMain.on("get_game_path", (event, data) => {
    const gamePath = gamePaths[0]
    if (!gamePath) {
        event.sender.send("game_path", "Game path not found, please select it manually.")
    }
    else {
        event.sender.send("game_path", gamePath)
    }
})
/*
const infoPath = path.join(__dirname, "savedInfo.json")
ipcMain.on("GET_SAVED_INFO", (event, data) => {
    if (!fs.existsSync(infoPath)) { return }

    const info = JSON.parse(fs.readFileSync(infoPath, "utf-8"))
    event.sender.send("SAVED_INFO", info)
})

ipcMain.on("SAVE_INFO", (event, data) => {
    fs.writeFileSync(infoPath, JSON.stringify(data))
})
*/