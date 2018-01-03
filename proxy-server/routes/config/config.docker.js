import { baseMockRequest } from '../handlers/index';

const { npm_package_config_mockserver_port: MOCK_PORT } = process.env;

const MOCK_URL = `https://mockingjay.i-ready.com`;

/** **************************************************************
 * Endpoint Urls
 *************************************************************** */
const API_URL = {
  mock: MOCK_URL,
};

/** ***************************************************************
 * RPC Handlers
 *************************************************************** */
const rpcHandlers = {
  '*': [
    {
      type: 'mock',
      handler: baseMockRequest,
    },
  ],
};

export { API_URL, rpcHandlers };
