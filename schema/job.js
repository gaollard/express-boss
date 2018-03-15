const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = {
  // 作者id
  authorId: {
    type: String,
    default: '5aa52337a9a78d3126f5bac8'
  },
  // 作者名
  authorName: {
    type: String,
    default: '伸手居士'
  },
  // 作者职位
  authorTitle: {
    type: String,
    default: 'HR'
  },
  // 公司id
  companyId: {
    type: String,
    default: '5aa7ee4a0ed6624c65b57661'
  },
  // 公司名
  companyName: {
    type: String,
    default: '腾讯科技'
  },
  // 招聘职位
  title: {
    type: String,
    default: '前端工程师'
  },
  // 工作地点
  address: {
    type: String,
    default: '深圳-科技园'
  },
  // 工作经验
  experience: {
    type: String,
    default: '3年以上'
  },
  // 学历
  education: {
    type: String,
    default: '本科'
  },
  // 薪酬待遇
  salary: {
    type: String,
    default: '15-30K'
  },
  // 职位详情
  details: {
    type: String,
    default: ''
  }
};

module.exports = mongoose.model('job', new Schema(jobSchema));