'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true
    },
    departure_day: {
        type: String,
        require: true
    },

    capacity: {
        type: Number,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Vessel', schema);