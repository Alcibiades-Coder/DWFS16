//// Importaciones

const mongoose = require('mongoose');

//// Objeto Modelo de DB para Reservas

const Users = mongoose.model('User', {
    idsearch: { type: String, required: false, minLength: 3},
    name: { type: String, required: true, minLength: 3},
    date: { type: Date, required: true, minLength: 3},
    city: { type: String, required: true, minLength: 3},
    hotel: { type: String, required: true, minLength: 1},
    numpassengers: { type: Number, required: true, minLength: 1},
    numkids: { type: Number, required: true, minLength: 1},
    roomtype: { type: String, required: true, minLength: 3},
    checkin: { type: Date, required: true, minLength: 3},
    checkout: { type: Date, required: true, minLength: 3},
    state: { type: String, required: true, minLength: 3},
})

module.exports = Users;