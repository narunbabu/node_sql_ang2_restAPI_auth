var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodedb'
});
connection.connect(function(err) {
  if (err) throw err;
    // var sql = "DROP TABLE customers";
    var email="ab@ameyem.com";
    connection.query('SELECT * FROM users WHERE email = ?',email, function (error, results, fields) {
        if (err) throw err;
    console.log(results[0].password);
    // console.log(fields);
  });
});