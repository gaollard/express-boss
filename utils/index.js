const utils = require('utility');

module.exports = {

  // 加密加盐
  md5Encode (pwd) {
    return utils.md5(`${pwd}&salt=WK1hg2d90l`)
  },

  // 参数校验
  checkParams (params) {
    for(let key in params) {
      if (key === '' || key === 'undefined' || key === null) {
        return false;
      }
    }
  },

  // 获取n个随机书
  getRandoms(n = 5) {
    let ret = '';
    for(let i = 0; i < n; i++) {
      ret += Math.floor(Math.random() * 10);
    }
    return ret;
  },

  // 生成userkey
  createUserkey (mobile) {
    let randoms = this.getRandoms(5);
    return `userkey_${mobile}_${randoms}`;
  }
};