const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = {
  // 公司名称
  companyName: {
    type: String,
    default: ''
  },
  // 经度
  longitude: {
    type: String,
    default: ''
  },
  // 维度
  latitude: {
    type: String,
    default: ''  
  },
  // 职位标签
  tags: {
    type: String,
    default: ''
  },
  // 成长阶段: A,B,C,D,上市
  stage: {
    type: String,
    default: '已上市'
  },
  // 规模
  scale: {
    type: String,
    default: '100人以上'
  },
  // 行业
  industry: {
    type: String,
    default: '互联网'
  },
  // 公司介绍
  describe: {
    type: String,
    default: ''
  },
  // 公司logo
  avatar: {
    type: String,
    default: ''
  },
  // 生活相册
  gallery: {
    type: String,
    default: ''
  }
};

module.exports = mongoose.model('company', new mongoose.Schema(companySchema));
