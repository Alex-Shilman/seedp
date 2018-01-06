import socketIo from 'socket.io';
import moment from 'moment';
import redis from 'redis';
import app from './app';
import Server from './server';

const sub = redis.createClient();
const ProxyServer = Server.init({ app });
const io = socketIo(ProxyServer);

sub.subscribe('channel:data');
sub.subscribe('channel:level2');

io.on('connection', (client) => {
  sub.on('message', (channel, message) => {
    switch (channel) {
      case 'channel:data':
        console.log('channel:data');
        client.emit('data', message);
        break;
      case 'channel:level2':
        console.log('channel:level2');
        client.emit('data:level2', message);
        break;
      default:
        console.log('Invalid channel');
        throw new Error(`Invalid channel ${channel}`);
        
    }
    
  });
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, interval);
  });
});

