export default function (socket) {
  socket.on('redux-socket-middleware/DISPATCH_ACTION', function (action) {
    socket.broadcast.emit('redux-socket-middleware/RECEIVE_ACTION', action);
  });
};