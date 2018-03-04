const {promisify} = require('util');
const redis = require("redis");

const client = redis.createClient({
  host: `39.108.138.156`,
  port: '6379',
  password: 'gaoxiong123.'
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on("error", err => {
  console.log('redis_error--------------------start');
  console.log(err);
  console.log('redis_error--------------------end');
});

module.exports = {
  getAsync,
  setAsync
};