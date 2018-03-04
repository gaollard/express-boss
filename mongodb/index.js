const mongoose = require('mongoose');
const MG_URL = `mongodb://39.108.138.156:27017`;

// 后台启动 mongod --config /usr/local/etc/mongod.conf
mongoose.connect(MG_URL);
mongoose.connection.on('connected', () => {
  console.log('mongodb connected');
});

module.exports = mongoose.connection;