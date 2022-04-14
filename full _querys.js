
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');


app.use(bodyParser.json());


//Database Connection

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root', /* MySQL User */
  password: 'Pooja@123', /* MySQL Password */
  database: 'local' /* MySQL Database */
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected with App...');
});







 

conn.connect(function (err) {
  // if (err) throw err;
  // console.log("Connected!");
  var sql = "CREATE TABLE items (firstname VARCHAR(255), lastname VARCHAR(255))";// varchar is have specified length 1 to 255 is used for string 
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(" alredy created");
    } else {
      console.log("table creted")
    }
  });
});



app.post('/api/items', (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname
  };
  console.log(data);

  var sql = "INSERT INTO  items(firstname ,lastname) VALUES ? " //
      var values=[ [data] ]
      conn.query(sql,[values] ,function(err, res) {
        if (err) {
          console.log("error: ", err);


        }
        else{
           console.log("inserted success",res.insertId);
         }
        })
      })

      
app.get('/api/items', (req, res) => {
  let sqlQuery = "SELECT * FROM items";

  conn.query(sqlQuery, (err, results) => {
    if (err) {
      res.send(apiResponse(results));
    } else {
      console.log("selected")
    }
  });
});


//* Get Single Item

app.get('/api/items/:id', (req, res) => {
  let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) {
      res.send(apiResponse(results));
    } else {
      console.log("item selectd")
    }
  });
});


// // * Create New Item

// app.post('/api/items', (req, res) => {
//   let data = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname
//   };
//   console.log(data);

//   var sql = "INSERT INTO  items(firstname ,lastname) VALUES ? " //
//       var values=[ [data] ]
//       dbcon.query(sql,[values] ,function(err, res) {
//         if (err) {
//           console.log("error: ", err);


//         }
//         else{
//            console.log("inserted success",res.insertId);
//          }
//         })
//       })

//* Update Item

app.put('/api/items/:id', (req, res) => {
  let sqlQuery = "UPDATE items SET firstname'" + req.body.firstname + "', lastname='" + req.body.lastname + "' WHERE lastname=" + req.params.lastname;

  conn.query(sqlQuery, (err, results) => {
    if (err) {
      res.send(apiResponse(results));
    } else {
      console.log("update items")
    }
  });
});


//* Delete Item

app.delete('/api/items/:id', (req, res) => {
  let sqlQuery = "DELETE FROM items WHERE lastname=" + req.params.lastname + "";

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) {
      res.send(apiResponse(results));
    } else {
      console.log("deleted successufully")
    }
  });
});


//* API Response

function apiResponse(results) {
  return JSON.stringify({ "status": 200, "error": null, "response": results });
}

app.listen(3000, () => {
  console.log('Server port 3000')
})