const UserSchema = require('../schema/user');
module.exports = {
  register(params) {
    return new Promise((resolve, reject) => {
      const {mobile, nickname, pwd, type, avatar} = params;
      UserSchema.find({mobile}, (err, doc) => {
        if (err) {
          reject({
            err
          });
        } else {
          if (doc.length) {
            reject({
              code: '10001',
              err: '该手机号码已经注册',
              data: null
            });
          } else {
            const UserCreator = new UserSchema({
              mobile,
              nickname,
              type,
              pwd,
              avatar
            });
            UserCreator.save((err, doc) => {
              if (err) {
                reject({
                  err
                });
              } else {
                resolve({
                  code: '0',
                  msg: '',
                  data: doc
                })
              }
            })
          }
        }
      });
    })
  }
};