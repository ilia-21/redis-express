const i21 = require('ilia21-js');

module.exports = {
    app: async function (req, res) {
        const { client } = require('../src/index');
        const json = req.body;
        let resp = {}
        if (json.length <= 0) return res.status(400).json({ message: "Bad request" })
        for (key of req.body) {
            try {
                result = await client.get(key)
                resp[key] = result
            } catch (e) {
                i21.error(e)
                return res.status(500).json({ message: "Internal server error" })
            }
        }
        res.json(resp)
    },
    path: '/get',
    type: 'post'
}