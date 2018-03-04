const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

router.get('/', function (req, res, next) {
  userModel.register();
  res.render('index', {title: 'Express'});
});

module.exports = router;
