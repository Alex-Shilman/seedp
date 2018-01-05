import io from 'socket.io-client';
import { applyMiddleware } from 'redux';
import middleware from './redux-socket/middleware';

export default applyMiddleware(
  middleware({
    actions: [
      'counter/INCREMENT',
    ],
    resolveSocket: (url) => {
      return io(url);
    },
  })
);