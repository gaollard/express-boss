const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = {
  // 工作地点
  address: {
    type: String,
    default: ''
  },
  // 工作经验
  experience: {
    type: String,
    default: ''
  },
  // 学历
  education: {
    type: String,
    default: ''
  },
  // 薪资
  salary: {
    type: String,
    default: ''
  },
  // 职位标签
  tags: {
    type: Array,
    default: []
  },
  // 职位详情
  desc: {
    type: String,
    default: ''
  },
  // 推荐职位
  recommends: {
    type: Array,
    default: []
  },
  // 职位要求
  demands: {
    type: Array,
    default: []
  }
};
module.exports = mongoose.model('position', new mongoose.Schema(positionSchema));
