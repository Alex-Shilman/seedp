// import { Ajax } from '@cainc/ca-common';
import utils from '../../utils';
import logger from '../../../logger';

const Ajax = '';

export const switchIreadyUser = (req, res, next) => {
  const { cookiejar, redirectUrl } = res.locals;
  const Cookie = utils.getCookie(cookiejar);

  if (!redirectUrl) {
    next();
  } else {
    logger(`Impersonating IReady user at ${redirectUrl}`);
    Ajax.get(redirectUrl, { withCredentials: true, headers: { Cookie } })
      .then(response => {
        req.session.mycookiejar.cookies.push(utils.parseCookies(response).toJSON().cookies[0]);
        res.locals.cookiejar = req.session.mycookiejar;
        next();
      })
      .catch(error => next(error));
  }
};
