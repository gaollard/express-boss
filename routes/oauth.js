const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const utils = require('../utils/index');

/**
 * @desc 注册
 * @param mobile 手机号码
 * @param pwd 登录密码
 * @param type 用户类型
 */
router.post('/register', (req, res) => {
  let {mobile, pwd, type} = req.body;
  userModel.register({
    mobile,
    type,
    pwd: utils.md5Encode(pwd)
  }).then(doc => {
    res.json({code: '0', msg: '', data: {userInfo: doc}});
  }).catch(err => {
    res.json({code: '1', msg: err, data: null});
  })
});

/**
 * @desc 登录
 * @param mobile 手机号码
 * @param pwd 密码
 */
router.post('/login', async (req, res) => {
  let {mobile, pwd, type} = req.body;
  let encodePwd = utils.md5Encode(pwd);
  try {
    let result = await userModel.login({mobile, pwd: encodePwd});
    res.json({code: '0', msg: '登录成功', data: {userInfo: result}});
  } catch (error) {
    if (error.errType === 'user_not_register') {
      try {
        let result = await userModel.register({mobile, type, pwd: encodePwd});
        res.json({code: '0', msg: '', data: {userInfo: result}});
      } catch (error) {
        res.json({code: '1', msg: error.msg, data: null});
      }
    }
  }
});

/**
 * @desc 获取用户信息
 * @param userkey 登录key
 */
router.post('/userInfo', async (req, res) => {
  try {
    let {userkey} = req.body;
    let data = await userModel.userInfo({userkey});
    res.json({code: '0', msg: '获取成功', data: {userInfo: data}});
  } catch (err) {
    res.json({code: '1', msg: err, data: null});
  }
});

// 更新用户信息
router.post('/update', async (req, res) => {
  try {
    let params = {};
    let {mobile, nickname, avatar, userkey} = req.body;
    if (nickname) params.nickname = nickname;
    if (avatar) params.avatar = avatar;
    if (userkey) params.userkey = userkey;
    if (mobile) params.mobile = mobile;
    let ret = await userModel.update(params);
    res.json({
      code: '0',
      msg: '',
      data: null
    })
  } catch (err) {
    res.json({
      code: '1',
      msg: err,
      data: null
    })
  }
});

/**
 * boss绑定公司
 * 1.验证当前用户是否为boss
 */
router.post('/bindCompany', async (req, res, next) => {
  let { userkey, companyId } = req.body;
  let data = await userModel.bindCompany({userkey, companyId});
  res.json({'code': '0', 'msg': '', data: data});
});

module.exports = router;
