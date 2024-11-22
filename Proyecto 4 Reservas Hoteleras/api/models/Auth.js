//// Importaciones

const mongoose = require('mongoose');

//// Objeto Modelo de DB para Autenticación

const Auths = mongoose.model('Auth', {
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
});

module.exports = Auths;