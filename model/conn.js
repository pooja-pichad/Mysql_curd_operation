const mysql = require("mysql")
const dbcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"express",
    password: "Pooja@123"
});

dbcon.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
  
module.exports = dbcon



// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE data_base", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });



dbcon.connect(function (err) {
  // if (err) throw err;
  // console.log("Connected!");
  var sql = "CREATE TABLE curd_table(id INT AUTO_INCREMENT PRIMARY KEY,first_name VARCHAR(255) NOT NULL,last_name VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,phone VARCHAR(50) NOT NULL)"
  dbcon.query(sql, function (err, result) {
    if (err) {
      console.log(" already  created");
    } else {
      console.log("table creted")
    }
  });
});


