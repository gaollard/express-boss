const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = {
  mobile: String,
  pwd: String,
  type: String,
  // 头像
  avatar: {
    type: String,
    default: ''
  },
  // 昵称
  nickname: {
    type: String,
    default: ''
  },
  // genius职位
  position: {
    type: String,
    default: ''
  }
};
module.exports = mongoose.model('user', new Schema(userSchema));
