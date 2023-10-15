const i21 = require('ilia21-js');

module.exports = {
    app: async function (req, res) {
        return res.status(404).send("Requsted pade does not exist")
    },
    path: '*',
    type: 'get'
}