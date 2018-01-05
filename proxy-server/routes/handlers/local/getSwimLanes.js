import _ from 'lodash';
import { query } from '../../../services/mysql';

export const getSwimLanes = (req, res, next) => {
  query({
    command: 'SELECT * FROM tbl_json_output where ?? = ?',
    args: ['node_id', 'kafka-nintendo'],
    callback: (error, response) => {
      res.json({data: parseResponse(response)});
    }
  });
}

function parseResponse(rows) =>
  rows.reduce((composed, row) => {
    composed[_.toLower(row.id)] = JSON.parse(row.json);
    return composed;
  }, {});
