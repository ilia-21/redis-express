const i21 = require('ilia21-js');

module.exports = {
    app: async function (req, res) {
        res.send("redis")
    },
    path: '/',
    type: 'get'
}