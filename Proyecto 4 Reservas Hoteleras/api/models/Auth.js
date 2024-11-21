const mongoose = require('mongoose');

const Auths = mongoose.model('Auth', {
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
});

module.exports = Auths;