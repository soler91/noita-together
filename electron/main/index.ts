import { distFolder, publicFolder } from "./root-path";
import { app, BrowserWindow, shell, ipcMain, dialog } from "electron";
import { release } from "os";
import { join } from "path";
import * as fs from "fs";
import { autoUpdater } from "electron-updater";
import { updateMod } from "./update";
import { appEvent } from "./appEvent";
import wsClient from "./ws";
import keytar from "keytar";
import got from "got";
import http from "http";

let rememberUser = false;

if (!process.env["VITE_APP_HOSTNAME"]) {
  console.error(
    "Please set the VITE_APP_HOSTNAME and the VITE_APP_WS_PORT environment variables"
  );
}

// Disable GPU Acceleration for Windows 7
if (release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

let win: BrowserWindow | null = null;
// Here, you can also use other preload
const preload = join(__dirname, "../preload/index.js");
const url = `http://${process.env.VITE_DEV_SERVER_HOST}:${process.env.VITE_DEV_SERVER_PORT}`;
const indexHtml = join(distFolder, "index.html");

const loginserv = http.createServer((req, res) => {
  const url = new URL("noitatogether:/" + req.url);
  const display_name = url.searchParams.get("display_name");
  const token = url.searchParams.get("token");
  const refreshToken = url.searchParams.get("refresh");
  const id = url.searchParams.get("id");
  const extra = url.searchParams.get("e");
  if (!display_name) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("nothing here.");
    return;
  }
  if (rememberUser) {
    keytar.setPassword("Noita Together", display_name, refreshToken);
  }
  appEvent("USER_EXTRA", extra);
  wsClient({
    display_name,
    token,
    id,
  });

  if (win) {
    if (win.isMinimized()) {
      win.restore();
    }
    win.focus();
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("You can close this.");
  //loginserv.close()
});

async function createWindow() {
  win = new BrowserWindow({
    title: "Noita Together",
    transparent: false,
    icon: join(publicFolder, "favicon.ico"),
    frame: false,
    thickFrame: true,
    width: 800,
    minWidth: 400,
    height: 700,
    minHeight: 600,
    backgroundColor: "#2e2c29",
    resizable: true,
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (import.meta.env.PROD) {
    win.loadFile(indexHtml);
  } else {
    win.loadURL(url);
    win.webContents.openDevTools();
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });
}

ipcMain.on("update_mod", (event, gamePath) => {
  keytar.findCredentials("Noita Together").then((credentials) => {
    if (credentials.length > 0) {
      const username = credentials[0].account;
      appEvent("SAVED_USER", username);
    }
  });
  if (gamePath) {
    const userDataPath = join(app.getPath("userData"), "/gamePath.json");
    fs.writeFileSync(userDataPath, JSON.stringify(gamePath));
  }
  updateMod(gamePath);
});

ipcMain.on("remember_user", (event, val) => {
  rememberUser = val;
});

ipcMain.on("TRY_LOGIN", async (event, account) => {
  try {
    const token = await keytar.getPassword("Noita Together", account);
    const { body } = await got.post(
      `https://${process.env.VITE_APP_HOSTNAME}/auth/refresh`,
      {
        json: {
          ticket: token,
        },
        responseType: "json",
      }
    );
    const { display_name, ticket, id, e } = body as any;
    appEvent("USER_EXTRA", e);
    wsClient({
      display_name,
      token: ticket,
      id,
    });
  } catch (error) {
    console.error(error);
    appEvent("TRY_LOGIN_FAILED", "");
  }
});

// new window example arg: new windows url
ipcMain.handle("open-win", (event, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
    },
  });

  if (import.meta.env.PROD) {
    childWindow.loadFile(indexHtml, { hash: arg });
  } else {
    childWindow.loadURL(`${url}/#${arg}`);
  }
});

ipcMain.on("minimize-window", () => {
  win.minimize();
});

ipcMain.handle("open-directory-dialog", () => {
  return dialog.showOpenDialog({ properties: ["openDirectory"] });
});

ipcMain.handle("get-version", () => {
  return app.getVersion();
});

ipcMain.on("open-login-twitch", () => {
  const loginUrl = `https://${process.env.VITE_APP_HOSTNAME}/auth/login`;
  shell.openExternal(loginUrl);
});

app
  .whenReady()
  .then(() => {
    loginserv.listen(25669);
    createWindow();
  })
  .catch((e) => console.error("Failed create window:", e));

autoUpdater.on("update-downloaded", () => {
  appEvent("UPDATE_DOWNLOADED", "");
});

/**
 * Install Vue.js or some other devtools in development mode only
 */
if (import.meta.env.DEV) {
  // TODO: https://codybontecou.com/electron-app-with-vue-devtools.html#running-the-vue-devtools-as-a-dependency
  /*
  app
    .whenReady()
    .then(() => import("electron-devtools-installer"))
    .then(({ default: installExtension, VUEJS3_DEVTOOLS }) =>
      installExtension(VUEJS3_DEVTOOLS, {
        loadExtensionOptions: {
          allowFileAccess: true,
        },
      })
    )
    .catch((e) => console.error("Failed install extension:", e));*/
}

/**
 * Check new app version in production mode only
 */
if (import.meta.env.PROD) {
  app
    .whenReady()
    .then(() => import("electron-updater"))
    .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
    .catch((e) => console.error("Failed check updates:", e));
}

app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") app.quit();
});

app.on("second-instance", () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
