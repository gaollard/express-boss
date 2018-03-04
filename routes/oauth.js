const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const utils = require('../utils/index');

// 注册
router.post('/register', (req, res, next) => {
  let {mobile, nickname, pwd, type, avatar} = req.body;
  pwd = utils.md5Encode(pwd);
  userModel.register({
    mobile,
    nickname,
    pwd,
    type,
    avatar
  }).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.json(err);
  })
});

// 登录
router.post('/login', function (req, res, next) {
  res.send('respond with a resource');
});

// 更新用户信息
router.post('/update', (req, res, next) => {

});

module.exports = router;
