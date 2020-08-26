//const webpack = require('webpack')
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        win: { target: ["portable"] },
        portable: {
          requestExecutionLevel: "user",
          unpackDirName: "NoitaPlays"
        },
        fileAssociations: {
          ext: "exe",
          icon: "C:/Dev/NoitaRace/icon.ico"

        }
      }
    }
  },
  filenameHashing: false/*,
  chainWebpack: config => {
    config.externals({'tera-mod-ui' : 'commonjs2 tera-mod-ui'})
  }*/
}