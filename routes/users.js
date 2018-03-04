const express = require('express');
const router = express.Router();

// 用户列表
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
