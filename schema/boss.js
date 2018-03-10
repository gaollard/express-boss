const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bossSchema = {
  // 是否认证
  isAuth: {
    type: Boolean,
    default: true
  },
  // 姓名
  username: {
    type: String,
    default: ''
  },
  // 公司名称
  companyName: {
    type: String,
    default: ''
  },
  // 公司ID
  companyId: {
    type: String,
    default: ''
  },
  // 职位
  title: {
    type: String,
    default: ''
  }
};

bossSchema.index({index: 1});
module.exports = mongoose.model('boss', new mongoose.Schema(bossSchema));
