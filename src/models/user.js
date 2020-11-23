'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    nameUser: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    identification: {
        type: String,
        require: true
    },
    typeUser: {
        type: String,
        require: true,
        enum: ['Passageiro', 'Empresário'],
        default: 'Passageiro'
    },
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('User', schema);