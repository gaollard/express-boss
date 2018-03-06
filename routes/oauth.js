const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const utils = require('../utils/index');
const redis = require('../db/redis');

// 注册
router.post('/register', (req, res) => {
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
router.post('/login', async (req, res) => {
  let {mobile, pwd} = req.body;
  try {
    let ret = await userModel.login({mobile, pwd: utils.md5Encode(pwd)});
    res.json({
      code: '0',
      msg: '登录成功',
      data: {
        userInfo: ret
      }
    });
  } catch (error) {
    res.json(error);
  }
});

router.get('/userInfo', (req, res) => {
  try {
    let {userkey} = req.body;
    userModel.userInfo(res, {userkey});
  } catch (err) {
    console.log(err);
  }
});

// 更新用户信息
router.post('/update', (req, res, next) => {

});

module.exports = router;
