import redis from 'redis';
import { query } from './mySql';
const pub = redis.createClient();

process.on('message', msg => {
  switch (msg.type) {
    case 'data:start':
      gatherData(msg);
      break;
    default:
      console.log(`${msg.type} doesnt exist`);
  }
});

function gatherData({counter}) {
  query({
    command: 'SELECT * from tbl_node where ?? = ?',
    args: ['env', 'nintendo'],
    callback: (error, response) => {
      const payload = JSON.stringify(response);
      if (error) {
        console.log('Error', error);
      } else {
        pub.get('node:data', (err, data) => {
          console.log('data here ==>', data);
          if(err) {
            console.log('error here', err, data);
          } else {
            if (counter === 1 || data !== payload) {
              console.log('sending payload');
              pub.set('node:data', payload);
              pub.publish('channel:data', payload);
            } else {
              console.log('data is the same');
              return;
            }
          }
        });
      }
      
    }
  })
}