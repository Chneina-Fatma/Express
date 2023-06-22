const express= require("express");

const userRouter=express.Router();

// add user


// get user 
userRouter.get("/store",async(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if (hours>8 && hours<19){
        res.render("oppened")

    }else{
        res.render("closed")
    }}
);


// delete user

// update user
module.exports=userRouter;