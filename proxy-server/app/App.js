import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import session from 'express-session';
import fallback from 'express-history-api-fallback';

const API_PORT = process.env.PORT || process.argv[2] || 8080;
const dist = `${__dirname}/../../dist`;

export default class {
  static init({ sessionSecret, routes }) {
    this.app = express();
    this.app.set('port', this._normalizePort(API_PORT));
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(express.static(dist));
    this.app.use(fallback('index.html', { root: dist }));
    this.app.use(
      session({
        secret: sessionSecret,
        resave: true,
        saveUninitialized: true,
      }),
    );
    this._setRoutes(routes);
    this._setErrorMiddleware();
    return this.app;
  }

  static _setRoutes(routes) {
    const options = {};
    routes.forEach(route => this.app.use(route.url, route.handler(options)));
  }

  static _setErrorMiddleware() {
    const handlers = [
      (req, res, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
      },
      (err, req, res, next) => {
        // set locals, only providing error in development
        try {
          res.status(err.status || 500).json({
            message: err.message,
            ...err,
          });
        } catch (e) {
          res.status(err.status || 500).json({
            message: err.message,
          });
        }
        console.error('ERROR', err);
        throw err;
      },
    ];
    handlers.forEach(handler => this.app.use(handler));
    return this.app;
  }

  static _normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }
    return false;
  }
}
