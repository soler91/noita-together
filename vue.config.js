module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                productName: "Noita Together",
                win: {
                    target: "nsis",
                    requestedExecutionLevel: "requireAdministrator"//eugh
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