import App from './App';
import proxyHandler from '../routes/proxy';

const app = App.init({
  sessionSecret: 'CA:asdffqwere9234355',
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

module.exports = app;
