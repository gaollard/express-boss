const chatScheme = require('../schema/chat');
module.exports = {
  addMsg () {
    const {from, to, content} = data;
    const chatId = [from, to].sort().join('_');
    chatScheme.create({chatId, from, to, content}, (err, doc) => {
      // 发送全局事件
      io.emit('recvMsg', doc);
    })
  }
};