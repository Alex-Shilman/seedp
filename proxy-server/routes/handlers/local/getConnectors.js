import { query } from '../../../services/mysql';

export const getConnectors = (req, res, next) => {
  query({
    command: 'SELECT * FROM tbl_connector_type',
    args: [],
    callback: (error, response) => {
      console.log('=========>', response);
      res.json({data: response});
    }
  });
}
