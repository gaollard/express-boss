const UserSchema = require('../schema/user');

module.exports = {

  // 获取用户列表
  users ({ type }) {
    return new Promise((resolve, reject) => {
      UserSchema.find({ type }, (err, doc) => {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  },

  remove({ }) {

  }
}
