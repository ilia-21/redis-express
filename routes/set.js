const i21 = require('ilia21-js');

module.exports = {
    app: async function (req, res) {
        const json = req.body;
        const { client } = require('../src/index');
        let resp = {}
        if (Object.keys(json).length <= 0) return res.status(400).json({ message: 'Missing body.' })
        for (key of Object.keys(json)) {
            if (!json.hasOwnProperty(key)) return res.status(400).json({ message: 'Missing body.' })
            try {
                result = await client.set(key, json[key])
                result == "OK" ? resp[key] = "Set" : resp[key] = "Not set"
            } catch (e) {
                i21.error(e)
                return res.status(500).json({ message: "Internal server error" })
            }
        }

        res.json(resp)
    },
    path: '/set',
    type: 'post'
}