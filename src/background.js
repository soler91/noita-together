'use strict'
const NT_SCHEME = "noitatogether"
const path = require("path")
const fs = require("fs")
import { autoUpdater } from "electron-updater"
import { app, protocol, BrowserWindow, dialog, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { updateMod } from "./update.js"
const appEvent = require("./appEvent")
const wsClient = require("./ws.js")
const keytar = require("keytar")
const got = require("got")
let rememberUser = false
const isDevelopment = process.env.NODE_ENV !== 'production'
const primaryInstance = app.requestSingleInstanceLock()
let mainWindow = null
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
])

if (isDevelopment && process.platform === 'win32') {
    app.removeAsDefaultProtocolClient(NT_SCHEME);
    app.setAsDefaultProtocolClient(NT_SCHEME, process.execPath, [path.resolve(process.argv[1])]);
} else {
    if (!app.isDefaultProtocolClient(NT_SCHEME)) {
        app.setAsDefaultProtocolClient(NT_SCHEME)
    }
}

autoUpdater.on('update-downloaded', (info) => {
    appEvent("UPDATE_DOWNLOADED", "")
});
async function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        title: "Noita Together",
        transparent: false,
        frame: false,
        thickFrame: true,
        width: 800,
        minWidth: 400,
        height: 700,
        minHeight: 600,
        backgroundColor: '#2e2c29',
        resizable: true,
        webPreferences: {
            // Use pluginOptions.nodeIntegration, leave this alone
            // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            enableRemoteModule: true
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
    } else {
        createProtocol('app')
        protocol.registerHttpProtocol(NT_SCHEME, (req, cb) => {
            dialog.showErrorBox(`NT: ${req.url}`)
        })
        // Load the index.html when not in development
        mainWindow.loadURL('app://./index.html')
        autoUpdater.checkForUpdatesAndNotify()
    }


}

ipcMain.on("update_mod", (event, gamePath) => {
    keytar.findCredentials("Noita Together").then(credentials => {
        if (credentials.length > 0) {
            const username = credentials[0].account
            appEvent("SAVED_USER", username)
        }
    })
    if (gamePath) {
        const userDataPath = path.join(app.getPath("userData"), "/gamePath.json")
        fs.writeFileSync(userDataPath, JSON.stringify(gamePath))
    }
    updateMod(gamePath)
})

ipcMain.on("remember_user", (event, val) => {
    rememberUser = val
})

ipcMain.on("TRY_LOGIN", async (event, account) => {
    try {
        const token = await keytar.getPassword("Noita Together", account)
        const { body } = await got.post(`https://${process.env.VUE_APP_HOSTNAME}/auth/refresh`, {
            json: {
                ticket: token
            },
            responseType: 'json'
        })
        const { display_name, ticket, id, e } = body
        appEvent("USER_EXTRA", e)
        wsClient({
            display_name,
            token: ticket,
            id
        })
    } catch (error) {
        console.error(error)
        appEvent("TRY_LOGIN_FAILED", "")
    }
})

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
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

if (!primaryInstance) {
    app.quit()
}
else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
        const cmdIndex = isDevelopment ? 3 : 2

        if (commandLine[cmdIndex]) {//noitatogether://?display_name=test&token=abc321&refresh=idk456&id=1111&e=0
            let url = new URL(commandLine[cmdIndex])
            let display_name = url.searchParams.get("display_name")
            let token = url.searchParams.get("token")
            let refreshToken = url.searchParams.get("refresh")
            let id = url.searchParams.get("id")
            let extra = url.searchParams.get("e")
            if (rememberUser) {
                keytar.setPassword("Noita Together", display_name, refreshToken)
            }
            appEvent("USER_EXTRA", extra)
            wsClient({
                display_name,
                token,
                id
            })
        }
        if (mainWindow) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore()
            }
            mainWindow.focus()
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
}

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