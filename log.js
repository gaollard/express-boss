const log4js = require('log4js');

log4js.configure({
  appenders: {login: {type: 'file', filename: 'login.log'}},
  categories: {default: {appenders: ['login'], level: 'error'}}
});

module.exports = {
  getLogger(name = 'login') {
    return log4js.getLogger(name)
  }
};