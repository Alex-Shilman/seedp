import redis from 'redis';
import { fork } from 'child_process';
import session from 'express-session';
import connectRedis from 'connect-redis';
import App from './App';
import proxyHandler from '../routes/proxy';
import config from '../config.json';

let counter = 0;
const redisClient = redis.createClient();
const RedisStore = connectRedis(session);

const app = App.init({
  sessionSecret: config.secret,
  sessionStore: new RedisStore({
    ...config.redis,
    client: redisClient
  })
  
  ,
  routes: [
    {
      url: '/rpc',
      handler: proxyHandler,
    }
  ],
});



process.on('uncaughtException', err => {
  console.error(err.stack);
  process.exit();
});


redisClient.on('connect', log('redis is connected'));
redisClient.on('ready', log('redis is ready'));
redisClient.on('reconnecting', log('redis is reconnecting'));
redisClient.on('error', log('redis error'));
redisClient.on('end', log('redis ended'));

const cp = fork(`${__dirname}/../services/redis`);
setInterval(() => {
  console.log(counter += 1);
  cp.send({ type: 'data:start', counter })
}, 3000);

function log(type) {
  return err => {
    console.log(`${type} ${!!err ? ',' + err : ''}`);
  }
}

module.exports = app;
