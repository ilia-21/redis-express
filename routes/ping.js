module.exports = {
    app: async function (req, res) {
        res.send('Hello World!')
    },
    path: '/ping',
    type: 'get'
}