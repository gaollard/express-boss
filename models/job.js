const NoteBossSchema = require('../schema/job');
module.exports = {
  list() {
    return NoteBossSchema.find({});
  },
  add({authorId, title, address, experience, education, salary, details}) {
    return NoteBossSchema.create({
      authorId,
      title,
      address,
      experience,
      education,
      salary,
      details
    })
  },
  one({jobId}) {
    return NoteBossSchema.find({_id: jobId});
  }
};