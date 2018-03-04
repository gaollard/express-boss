const express = require('express');
const router = express.Router();

// 登录
router.post('/register', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册
router.post('/login', function(req, res, next) {
  res.send('respond with a resource');
});

// 更新用户信息
router.post('/update', (req, res, next) => {

});

module.exports = router;
