const express=require("express")
const bodyParser = require('body-parser');
const req = require("express/lib/request");
const app = express();
// const route = require('./routes/route')
// const route=require("./routes/knexrotes")
const {router} = require("./routes/knexrotes")
const port =  5000;
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use("/",router)
app.listen(port,()=>{
    console.log("post number 5000")
})