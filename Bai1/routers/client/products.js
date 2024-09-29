const express = require('express');
const router=express.Router();
const controller=require("../../controller/client/product_controller");
router.get("/",controller.index)
router.get("/create/:id",controller.create)
router.get("/update/:id",controller.update)
module.exports=router;