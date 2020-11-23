'use strict'
const express = require('express');
const router =  express.Router();
const controller = require('../controllers/vessel-controller');

router.post('/', controller.post);
router.get('/', (req, res)=>{
    res.render('vessel');
});

module.exports = router;