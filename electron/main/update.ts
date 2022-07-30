import { appEvent } from "./appEvent";
import Updater, { type UpdateBranch } from "./updater";
import { getDb } from "./database";
import { spawn } from "child_process";
//let branch = "mod" //'master';
const updatelog = true;
function updateLog(data: string) {
  appEvent("update_log", data);
}

function updaterSetup(branch: UpdateBranch, gamePath: string) {
  let error = false; //eeee

  const updater = new Updater(branch, gamePath);
  updater.on("gamepath_error", () => {
    appEvent("GAME_PATH_NOT_FOUND", "");
  });

  updater.on("run_start", () => {
    updateLog(`[update] Self-update started (Branch: ${updater.branch})`);
  });
  updater.on("check_start", (serverIndex) => {
    if (updatelog)
      updateLog(`[update] Update check started (Server: ${serverIndex})`);
  });
  updater.on("check_success", (serverIndex, operations) => {
    if (updatelog)
      updateLog(
        `[update] Update check finished (Server: ${serverIndex}), ${operations.length} operations required`
      );
  });
  updater.on("check_fail", (serverIndex, error) => {
    updateLog(
      `[update] Update check failed (Server: ${serverIndex}): ${error}`
    );
  });
  updater.on("check_fail_all", () => {
    error = true;
    updateLog(`[update] Update check failed`);
  });
  updater.on("prepare_start", () => {
    if (updatelog)
      updateLog(`[update] Update download and preparation started`);
  });
  updater.on("download_start", (serverIndex, relpath) => {
    if (updatelog)
      updateLog(`[update] - Download: ${relpath} (Server: ${serverIndex})`);
  });
  updater.on("download_error", (relpath, expected_hash, downloaded_hash) => {
    error = true;
    updateLog(
      `[update] - Error downloading ${relpath}: file hash mismatch (expected: ${expected_hash}, found: ${downloaded_hash})!`
    );
  });
  //updater.on('download_finish', (serverIndex, relpath) => { if (updatelog) console.log(`[update] - Download done: ${relpath} (Server: ${serverIndex})`); });
  updater.on("prepare_finish", () => {
    if (updatelog)
      updateLog(`[update] Update download and preparation finished`);
  });
  updater.on("execute_start", () => {
    if (updatelog) updateLog(`[update] Update installation started`);
  });
  updater.on("install_start", (relpath) => {
    if (updatelog) updateLog(`[update] - Install: ${relpath}`);
  });
  //updater.on('install_finish', (relpath) => { if (updatelog) console.log(`[update] - Install done: ${relpath}`); });
  updater.on("install_error", (relpath, e) => {
    error = true;
    //console.log(`[update] - Error installing ${relpath}: ${e}`);
  });
  updater.on("execute_finish", () => {
    if (updatelog) updateLog(`[update] Update installation finished`);
  });
  updater.on("run_finish", (success) => {
    updateLog(`[update] Self-update ${success ? "finished" : "failed"}`);
  });

  return updater;
}

async function findGameFolder(): Promise<string> {
  try {
    const db = await getDb();
    const gamePath = db.data.storage.gamePath;
    if (gamePath) {
      return gamePath;
    }
  } catch (e) {
    console.error(e);
  }

  return await new Promise((res, reject) => {
    const gamePaths: string[] = [];
    const child = spawn("powershell.exe", [
      `
            (Get-Item "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Steam App 881100").GetValue("InstallLocation")
            (Get-Item "HKLM:\\SOFTWARE\\WOW6432Node\\GOG.com\\Games\\1310457090").GetValue("path")
            `,
    ]);
    child.stdout.on("data", function (data) {
      gamePaths.push(data.toString());
    });
    child.stdin.end();
    child.on("error", () => {
      // do nothing on error and let it default to blank on close
    });
    child.on("close", async () => {
      try {
        let gamePath = gamePaths.shift() || "";
        if (gamePath) {
          gamePath = gamePath.replace("\r\n", "");
        }
        const db = await getDb();
        db.data.storage.gamePath = gamePath;
        await db.write();
        res(gamePath);
      } catch (e) {
        reject(e);
      }
    });
  });
}

export const updateMod = async () => {
  const gamePath = await findGameFolder();
  // i wan die
  let error = false;
  let coopReady = false;
  let memesisReady = false;
  const coop = updaterSetup("mod", gamePath);
  const memesis = updaterSetup("nemesis", gamePath);
  coop.on("download_error", () => {
    error = true;
  });
  coop.on("install_error", () => {
    error = true;
  });
  coop.on("run_finish", () => {
    coopReady = true;
  });
  memesis.on("download_error", () => {
    error = true;
  });
  memesis.on("install_error", () => {
    error = true;
  });
  memesis.on("run_finish", () => {
    memesisReady = true;
  });

  const coopstuff = await coop.run();
  const memesisstuff = await memesis.run();
  if (coopReady && memesisReady && !error) {
    appEvent("update_done", true);
  }
  if (error) {
    console.warn("e", error);
  }
  return true;
};
