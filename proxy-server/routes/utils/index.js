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
    return (
      _.find(rpcHandlers[path], o => ~[...o.methods].indexOf(method)) || _.find(rpcHandlers['*'])
    );
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
