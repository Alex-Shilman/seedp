import { SOCKET_CONNECT } from './constants';

export function socketConnect(url) {
  console.log('the url is', url);
  return {
    type: SOCKET_CONNECT,
    url,
  };
}
