const express = require('express');
const router = express.Router();
const chatSchema = require('../schema/chat');
const userSchema = require('../schema/user');

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
  let usersDoc = await userSchema.find({});
  usersDoc.forEach(v => {
    const {avatar, nickname} = v;
    if(avatar && nickname) {
      users[v._id] = {nickname, avatar}
    }
  });
  res.json({
    msg: '', code: '0', data: {
      msgs: doc,
      users: users
    }
  })
});

module.exports = router;