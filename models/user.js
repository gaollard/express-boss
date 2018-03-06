const UserSchema = require('../schema/user');
const redisHandle = require('../db/redis');
const utils = require('../utils/index');

module.exports = {

  // 注册
  register({mobile, nickname, pwd, type, avatar}) {
    return new Promise((resolve, reject) => {
      UserSchema.find({
        mobile
      }, (err, doc) => {
        if (err) {
          reject({err});
        } else {
          if (doc.length) {
            reject({code: '10001', err: '该手机号码已经注册', data: null});
          } else {
            const UserCreator = new UserSchema({mobile, nickname, type, pwd, avatar});
            UserCreator.save((err, doc) => {
              if (err) {
                reject({err});
              } else {
                resolve({code: '0', msg: '', data: doc})
              }
            })
          }
        }
      });
    })
  },

  // 登录
  login({mobile, pwd}) {
    return new Promise((resolve, reject) => {
      UserSchema.find({
        mobile,
        pwd
      }, (err, doc) => {
        if(err) {
          reject({code: '1', msg: '账户不存在或密码不正确', data: null})
        } else {
          let randoms = utils.getRandoms(5);
          let userkey = `userkey_${mobile}_${randoms}`;
          const {nickname, type, avatar} = doc[0];
          resolve({mobile, nickname, type, avatar, userkey});
        }
      });
    })
  },

  // 获取用户信息
  userInfo(res, {userkey}) {
    redisHandle
      .getAsync(userkey)
      .then(data => {
        res.json({
          code: '0',
          msg: '登录成功',
          data: {
            mobile: data
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
};