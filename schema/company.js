const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = {
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
  // 经度
  longitude: {
    type: String,
    default: ''
  },
  // 维度
  latitude: {
    type: String,
    default: ''  
  }
};

companySchema.index({index: 1});
module.exports = mongoose.model('company', new mongoose.Schema(companySchema));
