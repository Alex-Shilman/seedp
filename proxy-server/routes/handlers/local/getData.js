import mysql from 'mysql';
import config from '../../../config.json';
console.log('config', config.my_sql);
const pool = mysql.createPool({
  connectionLimit: 100,
  ...config.my_sql,
});

export const getData = (req, res, next) => {
  
  pool.query('SELECT * from seedp.tbl_node', (error, results, fields)  => {
    if (error) throw error;
    res.json({results})
    // console.log('The solution is: ', results, fields);
  });
};

/*
JSON can be generated from http://www.json-generator.com/
based on a schema
 [
 '{{repeat(100000)}}',
 {
 id: '{{objectId()}}',
 firstName: '{{firstName()}}',
 lastName: '{{surname()}}',
 gender: '{{gender()}}',
 school: {
 id: '{{integer(1, 4)}}',
 name: function(tags){
 return [
 'LUM ELEMENTARY SCHOOL',
 'EDISON ELEMENTARY SCHOOL',
 'ENCINAL HIGH SCHOOL',
 'OTIS ELEMENTARY SCHOOL'][this.id]
 }
 },
 grade: '{{integer(1, 8)}}'
 }
 ]
 */
