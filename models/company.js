const companySchema = require('../schema/company');
module.exports = {
  list () {
    return companySchema.find({});
  },
  add({companyName, tags}) {
    return companySchema.create({companyName, tags})
  },
  clear () {
    return companySchema.remove({});
  },
  one({ _id }) {
    return companySchema.find({_id});
  }
};