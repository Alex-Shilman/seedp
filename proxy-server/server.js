import http from 'http';
import _ from 'lodash';
import logger from './logger';

export default class {
  static init({ app }) {
    this.server = http.createServer(app);
    this.server.listen(app.get('port'));
    this._bindEvents(this.server);
    return this.server;
  }
  
  static _bindEvents(server) {
    const { port } = server;
    const handlers = [
      {
        listener: 'error',
        handler: error => {
          if (error.syscall !== 'listen') {
            throw error;
          }
          
          const bind = _.isString(port) ? `Pipe ${port}` : `Port ${port}`;
          
          // handle specific listen errors with friendly messages
          switch (error.code) {
            case 'EACCES':
              console.error(`${bind} requires elevated privileges`);
              process.exit(1);
              break;
            case 'EADDRINUSE':
              console.error(`${bind} is already in use`);
              process.exit(1);
              break;
            default:
              throw error;
          }
        },
      },
      {
        listener: 'listening',
        handler: () => {
          const addr = server.address();
          const bind = _.isString(addr) ? `pipe ${addr}` : `port ${addr.port}`;
          logger(`Listening on ${bind}`);
        },
      },
    ];
    
    handlers.forEach(event => server.on(event.listener, event.handler));
  }
}
