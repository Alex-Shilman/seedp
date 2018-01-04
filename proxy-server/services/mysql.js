import mysql from 'mysql';
import config from '../config.json';
console.log('config', config.my_sql);
const pool = mysql.createPool({
  connectionLimit: 100,
  ...config.my_sql,
});

const query =  ({ command, args, callback }) => {
  pool.getConnection((error, connection) => {
    if (error) return callback(error);
    
    connection.query(command, args, (error,  results) => {
      connection.release();
      (error) ? callback(error) : callback(null, results);
    });
  });
}

export {
  query
};
