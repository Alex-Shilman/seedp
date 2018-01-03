import {
  initIreadySession,
  baseIreadyRequest,
  switchIreadyUser,
  getStudents,
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
      type: 'iready',
      handler: [initIreadySession, switchIreadyUser, baseIreadyRequest],
    },
  ],

  // The following entries are examples of sending an API call to the mock server.
  // Uncomment and modify as needed...
  //
  // NOTE: adding these will require that the mockserver be running locally
  //
  // 'rpc/student': [
  //   {
  //     type: 'mock',
  //     methods: ['getStudentGroupsByStaffMember'],
  //     handler: baseMockRequest,
  //   },
  // ],
  //
  // 'rpc/staffmember': [
  //   {
  //     type: 'mock',
  //     methods: ['getLoggedInStaffMemberSecurityContext'],
  //     handler: baseMockRequest,
  //   },
  // ],

  'rpc/local': [
    {
      type: 'local',
      methods: ['getLocalStudents'],
      handler: getStudents,
    },
  ],
};

/** ******************************************************************
 * Default Cookies
 ******************************************************************* */
const dummyCookies = [
  {
    key: 'JSESSIONID',
    value: 'D60137E28AB0632C6660AD1B9E88E1BC',
  },
  {
    key: 'AWSALB',
    value:
      'orCH3REcZDXsNM3+TVSxHJF+rg0kZpZrgS42/EohFOoz4RYdsl6UsyJ3uQVEQ3FVCVaiPJzOITstNUy5SgJQqxwDLZBz2jb93TPbaik4RvGWCj+r86kKgwBNJeXf',
  },
];

/** ****************************
 *  A schema for prompt login
 ***************************** */
const promptLoginSchema = username => {
  const schema = [
    {
      name: 'password',
      description: 'ENTER YOUR USER PASSWORD',
      hidden: true,
      required: true,
      replace: '*',
    },
  ];
  username ||
    schema.unshift({
      name: 'username',
      description: 'ENTER YOUR USERNAME',
    });
  return schema;
};
/** ************************************************************
 * Default User
 ************************************************************** */

const defaultUser = {
  username: '',
  state: 'OH',
  as: 's5sa1',
};

export { API_URL, rpcHandlers, dummyCookies, promptLoginSchema, defaultUser };
