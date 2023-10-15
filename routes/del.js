const i21 = require('ilia21-js');

module.exports = {
    app: async function (req, res) {
        const json = req.body;
        const { client } = require('../src/index');
        if (json.length <= 0) return res.status(400).json({ message: 'Invalid request.' })
        let resp = {}
        i21.log(json)
        for (key of json) {
            try {
                result = await client.del(key)
                result == 1 ? resp[key] = "Deleted" : resp[key] = "Key not found"
            } catch (e) {
                i21.error(e)
                return res.status(500).json({ message: "Internal server error" })
            }
        }
        return res.status(200).json(resp)
    },
    path: '/del',
    type: 'delete'
}