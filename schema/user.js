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
  title: {
    type: String,
    default: ''
  },
  // boss所属公司
  companyId: {
    type: String,
    default: '5aa7ee4a0ed6624c65b57661'
  }
};
module.exports = mongoose.model('user', new Schema(userSchema));
