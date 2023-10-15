const cc = require("node-console-colors");
module.exports = {
    log: function (message) {
        console.log(cc.set("bg_white", "fg_black", "[INFO]"), message)
    },
    warn: function (message) {
        console.log(cc.set("bg_yellow", "fg_black", "[WARN]"), message)
    },
    success: function (message) {
        console.log(cc.set("fg_green", message))
    },
    error: function (message) {
        console.log(cc.set("bg_red", "fg_black", "[ERROR]"), message)
    },
    fatal: function (message) {
        console.log(cc.set("bg_black", "fg_red", `[FATAL] ${message}`))
    }

}