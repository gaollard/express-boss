const UserSchema = require('../schema/user');
const redisHandle = require('../db/redis');
const utils = require('../utils/index');

module.exports = {

  // 注册
  register({mobile, pwd, type}) {
    let record = {}, userkey;
    return new Promise((resolve, reject) => {
      UserSchema.find({mobile}).then(doc => {
        if(doc.length) {
          reject('该手机号码已经注册');
        } else {
          const UserCreator = new UserSchema({mobile, type, pwd});
          return UserCreator.save();
        }
      }).then(doc => {
        record = doc;
        userkey = utils.createUserkey(mobile);
        return redisHandle.setAsync(userkey, mobile);
      }).then(() => {
        const {mobile, nickname, type, avatar, _id} = record;
        resolve({mobile, nickname, type, avatar, userkey, _id});
      }).catch(err => {
        reject(err);
      });
    })
  },

  // 登录
  login({mobile, pwd}) {
    return new Promise((resolve, reject) => {
      let result = {};
      UserSchema.find({mobile, pwd}).then(doc => {
        let userkey = utils.createUserkey(mobile);
        const {nickname, type, avatar, _id} = doc[0];
        result = {mobile, nickname, type, avatar, userkey, _id};
        return redisHandle.setAsync(userkey, mobile);
      }).then(() => {
        resolve(result);
      }).catch(err => {
        reject('账户不存在或密码不正确')
      });
    })
  },

  // 获取用户信息
  userInfo({userkey}) {
    return new Promise((resolve, reject) => {
      redisHandle.getAsync(userkey).then(mobile => {
        return UserSchema.findOne({mobile})
      }).then(data => {
        const { mobile, nickname, type, avatar} = data;
        resolve({mobile, nickname, type, avatar});
      })
      .catch(err => {
        reject(err);
      })
    });
  },

  // 更新用户信息
  update ({userkey, nickname, avatar}) {
    return new Promise((resolve, reject) => {
      redisHandle.getAsync(userkey).then(doc => {
        if(doc) {
          return UserSchema.update({mobile: doc}, {nickname, avatar});
        } else {
          reject('用户未登录')
        }
      }).then(res => {
        if(res.n === 1) {
          resolve();
        } else {
          reject('更新失败')
        }
      }).catch(err => {
        reject(err);
      })
    })
  }
};
