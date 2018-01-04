import socketIo from 'socket.io';
import moment from 'moment';
import redis from 'redis';
import app from './app';
import Server from './server';

const sub = redis.createClient();
const ProxyServer = Server.init({ app });
const io = socketIo(ProxyServer);

sub.subscribe('channel:data');

io.on('connection', (client) => {
  sub.on('message', (channel, message) => {
    client.emit('data', message);
  });
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, interval);
  });
});

