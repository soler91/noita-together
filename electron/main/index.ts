import { distFolder, publicFolder } from "./root-path";
import { app, BrowserWindow, shell, ipcMain, dialog } from "electron";
import { join } from "path";
import fs from "fs";
import { autoUpdater } from "electron-updater";
import { updateMod } from "./update";
import { appEvent } from "./appEvent";
import wsClient from "./ws";
import keytar from "keytar";
import got from "got";
import http from "http";
import { ipc } from "./ipc-main";

let rememberUser = false;

if (!process.env.VITE_APP_HOSTNAME) {
  console.error(
    "Please set the VITE_APP_HOSTNAME and the VITE_APP_WS_PORT environment variables"
  );
}

// Only a single instance of the app can be running at a time.
if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}
app.on("second-instance", showOrCreateWindow);

// Not sure about this, I've seen a few people complain about various driver bugs
// and other issues that are related to Electron/Chrome hardware acceleration.
app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

// Browser window
let win: BrowserWindow | null = null;

const loginServer = http.createServer((req, res) => {
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
    if (refreshToken) {
      keytar.setPassword("Noita Together", display_name, refreshToken);
    } else {
      console.error("Login - Missing refresh token");
    }
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
      preload: join(__dirname, "../preload/index.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (import.meta.env.PROD) {
    win.loadFile(join(distFolder, "index.html"));
    win.webContents.openDevTools();
  } else {
    win.loadURL(
      `http://${process.env.VITE_DEV_SERVER_HOST}:${process.env.VITE_DEV_SERVER_PORT}`
    );
    win.webContents.openDevTools();
  }

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

ipcMain.on("minimize-window", () => {
  win?.minimize();
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

autoUpdater.on("update-downloaded", () => {
  appEvent("UPDATE_DOWNLOADED", "");
});

app
  .whenReady()
  .then(showOrCreateWindow)
  .catch((e) => console.error("Failed create window:", e));

app.on("ready", async () => {
  loginServer.listen(25669);
});

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

if (import.meta.env.PROD) {
  app
    .whenReady()
    .then(() => import("electron-updater"))
    .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
    .catch((e) => console.error("Failed check updates:", e));
}

app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", showOrCreateWindow);

async function showOrCreateWindow() {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length > 0) {
    allWindows[0].focus();
  } else {
    await createWindow();
  }
}
