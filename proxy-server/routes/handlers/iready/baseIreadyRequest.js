// import { Ajax } from '@cainc/ca-common';
import utils from '../../utils';
import logger from '../../../logger';

const Ajax = '';

export const baseIreadyRequest = (req, res, next) => {
  const { body } = req;
  const { API_ENDPOINT_URL, cookiejar } = res.locals;
  const Cookie = utils.getCookie(cookiejar);

  logger(`Hitting the IReady server with ${body.method}`);

  Ajax.post(API_ENDPOINT_URL, body, { withCredentials: true, headers: { Cookie } })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => next(error));
};
