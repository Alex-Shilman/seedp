import { query } from '../../../services/mysql';

export const getData = (req, res, next) => {
  query({
    command: 'SELECT * from tbl_node where ?? = ?',
    args: ['env', 'nintendo'],
    callback: (error, response) => {
      console.log('=========>', response);
      res.json({data: response});
    }
  });
};
