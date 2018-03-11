const express = require('express');
const router = express.Router();

const userSchema = require('../schema/user');
const companySchema = require('../schema/company');
const positionSchema = require('../schema/position');

router.get('/', function (req, res, next) {
  userSchema.remove({}, (err, doc) => {
    if (err) {
      console.log('UserTable_remove_error', err)
    }
  });
  // bossSchema.remove({}, (err, doc) => {
  //   if (err) {
  //     console.log('UserTable_remove_error', err)
  //   }
  // });
});

module.exports = router;