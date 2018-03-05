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
router.post('/login',  (req, res, next) => {
  try {
    let { mobile, pwd } = req.body;
    pwd = utils.md5Encode(pwd);
    userModel.login(res, { mobile, pwd });
  } catch (err) {
    console.log(err);
  }
});

router.get('/userInfo', (req, res, next) => {
  try {
    let { userkey } = req.body;
    userModel.userInfo(res, { userkey });
  } catch (err) {
    console.log(err);
  }
})

// 更新用户信息
router.post('/update', (req, res, next) => {

});

module.exports = router;
