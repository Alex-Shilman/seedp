import { URL } from 'url';
// import { Ajax } from '@cainc/ca-common';
import utils from '../../utils';
import logger from '../../../logger';
import { defaultUser } from '../../config';

const Ajax = '';

export const initIreadySession = (req, res, next) => {
  /**
   *  Check to see if session has been established with iready endpoint server.
   *  If not, then it will be created.
   * */
  if (req.session.mycookiejar) {
    res.locals.cookiejar = req.session.mycookiejar;
    next();
  } else {
    // FIXME: if two requests on startup, this gets called twice
    const { API_ENDPOINT_URL } = res.locals;
    const url = new URL(API_ENDPOINT_URL);
    const { origin } = url;
    const onError = e => {
      next(e);
    };
    utils
      .promptLogin({
        defaultUser,
      })
      .then(credentials => {
        logger(`Logging into IReady server at ${origin}`);
        Ajax.post(`${origin}/login/ca`, credentials, { withCredentials: true })
          .then(response => {
            const { success, redirect } = response.data;
            if (!success) {
              onError(utils.createHttpError({ status: 401, message: 'Unauthorized Access' }));
            } else {
              if (redirect) {
                res.locals.redirectUrl = `${origin}${redirect.substr(1)}`;
              }
              req.session.mycookiejar = utils.parseCookies(response).toJSON();
              res.set('set-cookie', response.headers['set-cookie']);
              res.locals.cookiejar = req.session.mycookiejar;
              next();
            }
          })
          .catch(onError);
      })
      .catch(onError);
  }
};
