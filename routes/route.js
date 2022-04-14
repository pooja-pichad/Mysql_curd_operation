const express=require("express")
const router=express.Router();
var{
    insert, selectd, update,  Delete,
}=require('../controller/logic')



router.post('/post',insert)
router.get("/select",selectd)
router.put("/update",update)
router.delete("/delete",Delete)
module.exports=router