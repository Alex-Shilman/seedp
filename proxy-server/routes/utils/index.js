import prompt from 'prompt';
import _ from 'lodash';
import { Cookie, CookieJar } from 'tough-cookie';
import { rpcHandlers, dummyCookies, promptLoginSchema } from '../config';

let promptPromise;

export default class {
  /**
   *  parseCookies Method
   *  @param headers {Object}
   *  @param url {String}
   * */
  static parseCookies({ headers, config: { url } }) {
    const cookiejar = new CookieJar();
    _.forEach([...headers['set-cookie']], cookie => {
      cookiejar.setCookie(Cookie.parse(cookie), url, (err, ck) => {});
    });
    return cookiejar;
  }
  /**
   *  rebindMiddlewareHandlers Method
   *  @param handlers {Array}
   *  @param req {Object}
   *  @param res {Object}
   * */
  static rebindMiddlewareHandlers(handlers, req, res) {
    return handlers.map(handler => handler.bind(null, req, res));
  }
  /**
   *  getRPCHandler Method
   *  @param path {String}
   *  @param method {String}
   * */
  static getRPCHandler(path, method) {
    let handler;
    const paths = Object.keys(rpcHandlers);
    // sort paths, longest first since we have no other order in rpcHandlers, and we want to allow wild card catch alls
    // we wouldn't need to do this if rpcHandlers was an ordered array
    paths.sort((a, b) => {
      let c = 0;
      if (a.length > b.length) {
        c = -1;
      } else if (a.length < b.length) {
        c = 1;
      }
      return c;
    });
    // get all the RPC paths that match the input path
    const matchedPaths = paths.filter(rpcPath =>
      new RegExp(rpcPath.replace(/\*/g, '.*')).test(path),
    );
    // find the first handler that matches the path (+ method if supplied)
    matchedPaths.forEach(matchedPath => {
      if (!handler) {
        // handlers is an array of handlers for this path
        const handlers = rpcHandlers[matchedPath];
        // if it's a catch-all, it has no methods
        // if it's a catch-all, we just want the first handler that matches the path
        // else, we want the first handler that can handle the method
        handler = _.find(handlers, ({ methods }) => !methods || methods.includes(method));
      }
    });
    if (!handler) {
      throw new Error(`Could not find handler for path: ${path} and method: ${method}`);
    } else if (!handler.handler) {
      throw new Error(`No method defined on handler: ${JSON.stringify(handler)}`);
    }
    return handler;
  }
  /**
   *  getCookie Method
   *  @param cookiejar {Object}
   * */
  static getCookie(cookiejar) {
    return _.get(cookiejar, 'cookies', dummyCookies)
      .map(cookie => `${cookie.key}=${cookie.value}`)
      .join(';');
  }

  /*
  *  promptLogin Method
  *  @param loginSchema {Array}
  *  @param defaultUser {Object}
  * */
  static promptLogin({ defaultUser }) {
    const { username, password } = defaultUser;
    if (!promptPromise) {
      promptPromise = new Promise((resolve, reject) => {
        if (username && password) {
          resolve(defaultUser);
        } else {
          prompt.start();
          prompt.get(promptLoginSchema(username), (err, result) => {
            err ? reject(err) : resolve({ ...defaultUser, ...result });
          });
        }
      });
    }
    return promptPromise.then(credentials => {
      promptPromise = null;
      return credentials;
    });
  }

  /*
  *  createHttpError Method
  *  @param status {Number}
  *  @param message {String}
  * */
  static createHttpError({ status, message }) {
    const error = new Error();
    return { ...error, status, message };
  }
}
