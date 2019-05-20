const express = require('express');

const Controller = require('../controllers/maincontrol.js');

const router = express.Router();

router.get('/', Controller.getIndex);

router.get('/contact', Controller.getContact);

router.get('/resume', Controller.getResume);

module.exports = router;

