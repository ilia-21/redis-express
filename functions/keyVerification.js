require('dotenv').config();
const i21 = require('ilia21-js');
const config = require('../config.json');

function keyVerification(req, res, next) {
    if (config.keyRequired) {
        const expectedKey = process.env.KEY;
        const providedKey = req.headers['key'];
        !expectedKey ? i21.error('Missing key! Follow authorization guide in README.md') : null;
        if (!providedKey || providedKey !== expectedKey) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }

    next();
}

module.exports = keyVerification;