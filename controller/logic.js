const req = require("express/lib/request");
const dbcon = require("../model/conn");

var insert=(req,res)=>{
  
  dbcon.query("INSERT INTO curd_table set ?",[req.body] ,function(err, result) {
          if (err)throw err;
      res.status(200).json({message:"inserted"});

  })
}

const selectd=(req,res)=>{
  dbcon.query("Select * from curd_table where id = ? ",[req.body.id], function (err, result) {
    if(err) throw err
    console.log(result,"selected");
      res.status(200).json({message:"selected"})

    });
  }

const update=(req,res)=>{
    var sql="UPDATE curd_table SET first_name = 'priya' WHERE first_name = 'guudu'"
        dbcon.query(sql,function(err,result){
            if(err) throw err;
            console.log(result.affectedRows + " record(s) updated")
             res.status(200).json({ error:false, message: ' successfully updated' 
            });

        })
      
      }

const Delete=(req,res)=>{
  
  var sql = "DELETE FROM curd_table WHERE first_name = 'kiran'";
      dbcon.query(sql,function(err,result){
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
          res.status(200).json({ error:false, message: 'Employee successfully deleted' });
          // res.send("record delete")

      })
  
}


module.exports={insert,
              selectd ,
              update ,
              Delete }




