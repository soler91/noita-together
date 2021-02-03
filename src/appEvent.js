const { webContents } = require("electron")
module.exports = (event, data) => {
    webContents.getAllWebContents().forEach(content => {
        content.send(event, data)
    })
}