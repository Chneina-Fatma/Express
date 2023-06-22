const express= require("express");

const productRouter=express.Router()

// add product


// get product 
productRouter.get("/p", (req,res) => res.send ("im a new product") );


// delete product



// update product
module.exports=productRouter;