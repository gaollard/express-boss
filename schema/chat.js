const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 聊天信息表
const chatSchma = {
  // 聊天id
  chatId: {
    type: String,
    require: true,
  },
  // 谁发的
  from: {
    type: String,
    require: true
  },
  // 发给谁
  to: {
    type: String,
    require: true
  },
  // 内容
  content: {
    type: String,
    require: true,
    default: ''
  },
  // 接收人是否阅读
  read: {
    type: Boolean,
    default: false
  },
  // 创建时间
  createTime: {
    type: Number,
    default: new Date().getTime()
  }
}

chatSchma.index({ index: 1})
module.exports = mongoose.model('chat', new mongoose.Schema(chatSchma));
