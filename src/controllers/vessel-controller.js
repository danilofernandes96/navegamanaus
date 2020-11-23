'use strict'

const mongoose = require('mongoose');
const Vessel = mongoose.model('Vessel');

exports.getByDestination = (req, res, next)=>{
    Vessel.find({
       destination: 'Parintins'
    }).lean().then(function(vessels){
        res.render('parintins', {vessels: vessels});
    }).catch(e=>{
        res.status(400).send(e);
    });
    
};

exports.post = (req, res, next)=>{
    const vessel = new Vessel({
        name: req.body.nameShip,
        destination: req.body.destination,
        departure_day: req.body.departure,
        capacity: req.body.capacity,
        price: req.body.price
    });
    vessel.save().then(()=>{
        res.status(201).send({message: 'Embarcação cadastrada com sucesso!'});
    }).catch(e=>{
        res.status(400).send({message: 'Erro ao cadastrar embarcação!', data: e});
    });
};
