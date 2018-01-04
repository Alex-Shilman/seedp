import axios from 'axios';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8080');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToData(cb) {
  socket.on('data', payload => cb(null, payload));
}

function JsonRPC(url, payload) {
  return axios.post(url, payload);
}
export {
  subscribeToTimer,
  subscribeToData,
  JsonRPC
};