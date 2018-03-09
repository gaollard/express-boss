const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = {
  mobile: String,
  pwd: String,
  type: String,
  avatar: {
    type: String,
    default: ''
  },
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
module.exports = mongoose.model('user', new mongoose.Schema(userSchema));
