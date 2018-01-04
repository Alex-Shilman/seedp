import async from 'async';
import { API_URL } from './config';
import utils from './utils';

/** **********************************************************************
 *   Intersects and Handles Collection of Middlewares
 *  that consecutively executes handlers
 ************************************************************************ */

module.exports = ({ ...options }) => (req, res, next) => {
  const { originalUrl, body: { method } } = req;
  const { type, handler } = utils.getRPCHandler(originalUrl.substr(1), method);
  /* Generate API_ENDPOINT_URL for next middleware */
  res.locals.mysqlConnection = options.mysqlConnection;
  res.locals.API_ENDPOINT_URL = `${API_URL[type]}${originalUrl}`;
  /* Execute middlewares sequencially */
  async.series(utils.rebindMiddlewareHandlers([].concat(handler), req, res), err => {
    if (err.response) {
      // the data of the error is really the response body
      const { response: { status, data: body }, config: { url } } = err;
      console.error(
        'There was a problem running the middleware!',
        '\r\nurl:',
        url,
        '\r\nrequest:',
        req.body,
        '\r\nresponse:',
        body,
      );
      // data could be text or JSON, we're just a Proxy, so let's send whatever
      // error we get back, as that should be accurate.
      res.status(status).send(body);
    } else if (err) {
      next(err);
    } else {
      next();
    }
  });
};
