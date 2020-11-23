'use strict'
const express = require('express');
const router =  express.Router();
const controller = require('../controllers/vessel-controller');

router.get('/', controller.getByDestination);

module.exports = router;