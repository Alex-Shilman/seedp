export const getSchools = (req, res, next) => {
  res.json([
    { id: 1, name: 'LUM ELEMENTARY SCHOOL' },
    { id: 2, name: 'EDISON ELEMENTARY SCHOOL' },
    { id: 3, name: 'ENCINAL HIGH SCHOOL' },
    { id: 4, name: 'OTIS ELEMENTARY SCHOOL' },
  ]);
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
