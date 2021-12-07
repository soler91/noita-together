const appEvent = require("./appEvent")
//let branch = "mod" //'master';
let updatelog = true;
let noselfupdate = false;
function updateLog(data) {
    appEvent("update_log", data)
}

function updaterSetup(branch, gamePath) {
    delete require.cache[require.resolve('./updater')];
    const Updater = require('./updater');

    let error = false; //eeee

    const updater = new Updater(branch, gamePath);
    updater.on('gamepath_error', () => {
        appEvent("GAME_PATH_NOT_FOUND")
    })

    updater.on('run_start', () => { updateLog(`[update] Self-update started (Branch: ${updater.branch})`); });
    updater.on('check_start', (serverIndex) => { if (updatelog) updateLog(`[update] Update check started (Server: ${serverIndex})`); });
    updater.on('check_success', (serverIndex, operations) => { if (updatelog) updateLog(`[update] Update check finished (Server: ${serverIndex}), ${operations.length} operations required`); });
    updater.on('check_fail', (serverIndex, error) => { updateLog(`[update] Update check failed (Server: ${serverIndex}): ${error}`); });
    updater.on('check_fail_all', () => { error = true; updateLog(`[update] Update check failed`); });
    updater.on('prepare_start', () => { if (updatelog) updateLog(`[update] Update download and preparation started`); });
    updater.on('download_start', (serverIndex, relpath) => { if (updatelog) updateLog(`[update] - Download: ${relpath} (Server: ${serverIndex})`); });
    updater.on('download_error', (relpath, expected_hash, downloaded_hash) => {
        error = true;
        updateLog(`[update] - Error downloading ${relpath}: file hash mismatch (expected: ${expected_hash}, found: ${downloaded_hash})!`);
    });
    //updater.on('download_finish', (serverIndex, relpath) => { if (updatelog) console.log(`[update] - Download done: ${relpath} (Server: ${serverIndex})`); });
    updater.on('prepare_finish', () => { if (updatelog) updateLog(`[update] Update download and preparation finished`); });
    updater.on('execute_start', () => { if (updatelog) updateLog(`[update] Update installation started`); });
    updater.on('install_start', (relpath) => { if (updatelog) updateLog(`[update] - Install: ${relpath}`); });
    //updater.on('install_finish', (relpath) => { if (updatelog) console.log(`[update] - Install done: ${relpath}`); });
    updater.on('install_error', (relpath, e) => {
        error = true;
        //console.log(`[update] - Error installing ${relpath}: ${e}`);
    });
    updater.on('execute_finish', () => { if (updatelog) updateLog(`[update] Update installation finished`); });
    updater.on('run_finish', (success) => {
        updateLog(`[update] Self-update ${success ? 'finished' : 'failed'}`);

    });

    return updater
}

exports.updateMod = async (gamePath) => {
    // i wan die
    let error = false
    let coopReady = false
    let memesisReady = false
    const coop = updaterSetup("mod", gamePath);
    const memesis = updaterSetup("nemesis", gamePath);
    coop.on('download_error', () => { error = true })
    coop.on('install_error', () => { error = true })
    coop.on('run_finish', () => {
        coopReady = true
    })
    memesis.on('download_error', () => { error = true })
    memesis.on('install_error', () => { error = true })
    memesis.on('run_finish', () => {
        memesisReady = true
    })

    const coopstuff = await coop.run()
    const memesisstuff = await memesis.run()
    if (coopReady && memesisReady && !error) {
        appEvent("update_done", true)
    }
    return true;
}