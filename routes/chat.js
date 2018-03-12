const express = require('express');
const router = express.Router();
const chatSchema = require('../schema/chat');

// 聊天列表
router.post('/msgs/', async (req, res) => {
  const {userId} = req.body;
  let users = {};
  let doc = await chatSchema.find({
    '$or': [
      {from: userId},
      {to: userId}
    ]
  });
  res.json({
    msg: '', code: '0', data: {
      msgs: doc,
      users: {}
    }
  })
});

module.exports = router;