const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BossSchema = {
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

BossSchema.index({index: 1});

const model = mongoose.model('user', new mongoose.Schema(BossSchema));

model.insert({
  username: '何帆',
  companyName: ''
})

module.exports = model;
