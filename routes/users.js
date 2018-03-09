const express = require('express');
const router = express.Router();
const usersModel = require('../models/users');

// 用户列表
router.get('/boss', (req, res, next) => {
  usersModel.users({ type: 'boss' }).then(doc => {
    res.json({
      msg: '',
      code: '0',
      data: {
        list: doc
      }
    })
  })
})

module.exports = router;
