// Imports
const got = require("got")
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
const { spawn } = require("child_process")
function FindGameFolder() {
    return new Promise(res => {
        const gamePaths = []
        const child = spawn("powershell.exe", [
            `
            (Get-Item "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Steam App 881100").GetValue("InstallLocation")
            (Get-Item "HKLM:\\SOFTWARE\\WOW6432Node\\GOG.com\\Games\\1310457090").GetValue("path")
            `
        ]);
        child.stdout.on("data", function (data) {
            gamePaths.push(data.toString())
        });
        child.stdin.end()
        child.on("close", () => {
            res(gamePaths)
        })
    })
}
// Constants
const AutoUpdateServers = ["http://unicast.link:8080/",'https://raw.githubusercontent.com/soler91/noita-together/'];

// Implementation
function forcedirSync(dir) {
    try {
        fs.mkdirSync(dir, { recursive: true });
    } catch (_) {
        // Ignore
    }
}

function hash(data) {
    return crypto.createHash('sha256').update(data).digest().toString('hex').toUpperCase();
}

class Updater extends EventEmitter {
    constructor(branch = 'mod') {
        super();
        this.setMaxListeners(0);

        this.branch = branch;
        this.gamePath = ""
    }

    buildPath(relpath) {
        const p = path.join(this.gamePath, relpath)
        return p;
    }
    buildURL(serverIndex, relpath) { return `${AutoUpdateServers[serverIndex]}${this.branch}/${relpath}`; }
    async downloadRaw(serverIndex, relpath) {
        const url = this.buildURL(serverIndex, relpath)
        return await got(url).buffer();
    }
    async downloadJSON(serverIndex, relpath) {
        const url = this.buildURL(serverIndex, relpath)
        return await got(url).json();
    }

    async check(serverIndex = 0) {
        this.emit('check_start', serverIndex);

        try {
            const manifest = await this.downloadJSON(serverIndex, 'manifest.json');

            let operations = [];
            Object.keys(manifest.files).forEach(relpath => {
                const filedata = manifest.files[relpath];
                const filepath = this.buildPath(relpath);

                let expectedHash = null;
                let needsUpdate = false;
                if (typeof filedata === 'object') {
                    expectedHash = filedata.hash.toUpperCase();

                    if (filedata.overwrite === 'only')
                        needsUpdate = fs.existsSync(filepath) && hash(fs.readFileSync(filepath)) !== expectedHash;
                    else
                        needsUpdate = !fs.existsSync(filepath) || (filedata.overwrite && hash(fs.readFileSync(filepath)) !== expectedHash);
                } else {
                    expectedHash = filedata.toUpperCase();
                    needsUpdate = !fs.existsSync(filepath) || hash(fs.readFileSync(filepath)) !== expectedHash;
                }

                if (needsUpdate)
                    operations.push({
                        type: 'update',
                        hash: expectedHash,
                        relpath,
                        abspath: filepath
                    });
            });

            this.emit('check_success', serverIndex, operations);
            return {
                serverIndex,
                operations
            };
        } catch (e) {
            this.emit('check_fail', serverIndex, e);

            if (serverIndex + 1 < AutoUpdateServers.length) {
                return await this.check(serverIndex + 1);
            } else {
                this.emit('check_fail_all');
                return null;
            }
        }
    }

    async run(checkResult = null) {
        this.emit('run_start');

        this.emit('gamepath_find');
        const paths = await FindGameFolder()
        if (paths.length > 0) {
            this.gamePath = path.join(paths.shift().replace("\r\n", ""), "/mods/noita-together/")
        }
        else {
            this.emit('gamepath_error')
        }
        if (!checkResult)
            checkResult = await this.check();

        let success;
        if (checkResult) {
            success = true;

            if (checkResult.operations.length > 0) {
                this.emit('prepare_start');

                // Prepare and validate operations
                for (let operation of checkResult.operations) {
                    if (operation.type === 'update') {
                        this.emit('download_start', checkResult.serverIndex, operation.relpath);
                        operation.data = await this.downloadRaw(checkResult.serverIndex, operation.relpath);
                        if (operation.hash === hash(operation.data)) {
                            this.emit('download_finish', checkResult.serverIndex, operation.relpath);
                        } else {
                            this.emit('download_error', operation.relpath, operation.hash, hash(operation.data));
                            success = false;
                            break;
                        }
                    }
                }

                this.emit('prepare_finish');

                if (success) {
                    this.emit('execute_start');

                    // All operations have been prepared and validated, so execute them now
                    for (let operation of checkResult.operations) {
                        switch (operation.type) {
                            case 'update': {
                                this.emit('install_start', operation.relpath);
                                try {
                                    forcedirSync(path.dirname(operation.abspath));
                                    fs.writeFileSync(operation.abspath, operation.data);
                                    this.emit('install_finish', operation.relpath);
                                } catch (e) {
                                    success = false;
                                    this.emit('install_error', operation.relpath, e);
                                }
                                break;
                            }
                        }
                    }

                    this.emit('execute_finish');
                }
            }
        } else {
            success = false;
        }

        this.emit('run_finish', success);
        return checkResult && checkResult.operations && checkResult.operations.length !== 0;
    }
}

module.exports = Updater;
