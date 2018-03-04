const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const utils = require('../utils/index');
const redis = require('../db/redis');

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
  redis.getAsync('userKey').then(val => {
    console.log('设置用户登录', val);
  }).catch(err => {
    console.log(err);
  });
  res.send('respond with a resource2');
});

// 更新用户信息
router.post('/update', (req, res, next) => {

});

module.exports = router;
