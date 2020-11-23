'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.post = (req, res, next)=>{
    const user = new User({
        nameUser: req.body.first_name,
        lastName: req.body.last_name,
        identification: req.body.identification,
        typeUser: req.body.typeUser,
        email: req.body.email,
        password: req.body.password
    });
    user.save().then(()=>{
        res.status(201).send({message: 'Usuário cadastrado com sucesso'});
    }).catch(e=>{
        res.status(400).send({message: 'Erro ao cadastrar usuário', data: e});
    });
};
