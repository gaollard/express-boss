const utils = require('utility');

module.exports = {
  md5Encode (pwd) {
    return utils.md5(`${pwd}&salt=WK1hg2d90l`)
  },
  checkParams (params) {
    for(let key in params) {
      if (key === '' || key === 'undefined' || key === null) {
        return false;
      }
    }
  }
};