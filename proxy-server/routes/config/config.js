import {
  getData,
  getSwimLanes,
  getConnectors,
} from '../handlers/index';

const { npm_package_config_mockserver_port: MOCK_PORT } = process.env;

const IREADY_URL = 'https://mash.i-ready.com';
const MOCK_URL = `http://localhost:${MOCK_PORT}`;

/** **************************************************************
 * Endpoint Urls
 *************************************************************** */
const API_URL = {
  iready: IREADY_URL,
  mock: MOCK_URL,
};

/** ***************************************************************
 * RPC Handlers
 *************************************************************** */
const rpcHandlers = {
  
  '*': [
    {
      type: 'local',
      methods: ['getLocalStudents'],
      handler: getData,
    },
  ],
  
  'rpc/swimlanes': [
    {
      type: 'local',
      methods: ['getSwimLanes'],
      handler: getSwimLanes,
    },
  ],
  
  'rpc/data_platform': [
    {
      type: 'local',
      methods: ['getDataPlatform'],
      handler: getData,
    },
  ],
  
  'rpc/connectors': [
    {
      type: 'local',
      methods: ['getConnectors'],
      handler: getConnectors,
    },
  ],
};

export { API_URL, rpcHandlers };
