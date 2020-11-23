'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const router = express.Router();

//conecta com o banco
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/manausnavegacao', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log('MongoDB conectado com sucesso!');
}).catch((e) => {
    console.log('Erro de conexao com o banco' + e);
});

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//assets
app.use(express.static(path.join(__dirname, 'assets')));

//handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//carregamento de models
const Vessel = require('./models/vessel');
const User = require('./models/user');

//carregamento de rotas
const indexRoute = require('./routes/index-route');
const vesselRoute = require('./routes/vessel-route');
const parintinsRoute = require('./routes/parintins-route');
const userRoute = require('./routes/user-route');




app.use('/', indexRoute);
app.use('/vessel', vesselRoute);
app.use('/parintins', parintinsRoute);
app.use('/user', userRoute);




module.exports = app;