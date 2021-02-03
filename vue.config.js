module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                productName: "Noita Together",
                win: {
                    target: "nsis"
                },
                nsis: {
                    perMachine: true,
                    oneClick: false,
                    allowToChangeInstallationDirectory: true,
                },
                publish: ["github"]
            }
        }
    },
    filenameHashing: false
}