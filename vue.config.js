const path = require("path")

module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    pluginOptions: {
        electronBuilder: {
            preload: "src/preload.js"
        }
    }
}