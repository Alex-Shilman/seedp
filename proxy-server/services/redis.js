import redis from 'redis';
import _ from 'lodash';
import { query } from './mySql';
const pub = redis.createClient();

process.on('message', msg => {
  switch (msg.type) {
    case 'data:start':
      gatherData(msg);
      break;
    case 'data:level2':
      gatherFirstLevelData(msg);
      break;
    default:
      console.log(`${msg.type} doesnt exist`);
  }
});

function pubsub(redisKey, pubChannel, payload, boolExp) {
  pub.get(redisKey, (err, data) => {
    // console.log('data here ==>', data);
    if(err) {
      console.log('error here', err, data);
    } else {
      if ((_.isFunction(boolExp) && boolExp()) || data !== payload) {
        console.log(`sending payload to channel ${pubChannel}`);
        pub.set(redisKey, payload);
        pub.publish(pubChannel, payload);
      } else {
        console.log(`${redisKey} data is the same`, (_.isFunction(boolExp) && boolExp()), data === payload);
        return;
      }
    }
  });
};

function gatherData({counter}) {
  query({
    command: 'SELECT * from tbl_node where ?? = ?',
    args: ['env', 'nintendo'],
    callback: (error, response) => {
      const payload = JSON.stringify(response);
      if (error) {
        console.log('Error', error);
      } else {
        pubsub('node:data', 'channel:data', payload, () => counter === 1);
      }
      
    }
  })
}

function gatherFirstLevelData({counter}) {
  query({
    command: 'SELECT * FROM tbl_json_output where ?? = ?',
    args: ['node_id', 'kafka-nintendo'],
    callback: (error, response) => {
      const payload = JSON.stringify(response);
      if (error) {
        console.log('Error', error);
      } else {
        pubsub('node:level2', 'channel:level2', payload, () => counter === 1);
      }
    }
  });
}