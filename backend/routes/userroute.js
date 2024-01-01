require("dotenv").config()
const express =require('express')
const formidable= require('express-formidable')
const bcrypt= require('bcrypt')
const parser=require('body-parser')
const randomstring=require('randomstring')
const nodemailer=require('nodemailer');
const jwt=require('jsonwebtoken')
const userS=require('../Schemas/user')
require('../config/database').connect();

let reset_password_email=require("../email.js")

const router=express.Router();


router.post('/register',formidable(),async function(req,res){
    let{firstname,lastname,email,password}=req.fields;
    if(!(firstname && lastname && email && password)){
    res.status(400).send('All the inputs are required...')
    }
    else{

       if(await userS.findOne({email})){
        res.send("User already existed...")
       }
       else{
        const vtoken=randomstring.generate()
        let enc_password= await bcrypt.hash(password,10)
        
      let user = await userS.create({
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:enc_password,
                token:vtoken
                })
                
             let token=jwt.sign({user_id:user._id,email},process.env.TOKEN_KEY,
                {expiresIn:"2h"});
   
                user.token=token;
   
        res.json(user)

       }

    }
})

router.post('/login', formidable(), async function (req, res){
    let {email,password} = req.fields;
    if (!(email && password)){
        res.status(400).send(' All the inputs are required...')
    }
    else{
        let user = await userS.findOne({email})

        if (user && (await bcrypt.compare(password, user.password)))
        {
            let token = jwt.sign({ user_id:user._id, email},
                process.env.TOKEN_KEY,
                 { expiresIn: "2h" });

            user.token = token
            res.json(user)
        }
        else{
            res.status(400).send('Username or Password is incorrect...!!')
        }
    }
});


router.post("/forgot_password", formidable(), async function (req, res) {
    let {email} = req.fields;
    try {
      const user = await userS.findOne({ email });
  
      if (user) {
        const resetToken = randomstring.generate();
  
        await userS.findByIdAndUpdate(user._id, { $set: { resetToken: resetToken } });
  
        console.log("Before sending reset email");
        await reset_password_email(user.firstname, user.email, resetToken);
        console.log("After sending reset email");
  
        res.status(200).send({ msg: "Check the mail and please reset the password" });
      } else {
        return res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  });
  

router.get("/reset_password/:token",formidable(),async function(req,res){
    try{
         const token=req.query.token;
         const tokenData=await userS.findOne({resetToken});
         if(tokenData)
         {
             const password=req.fields.password;
             const newpass=await bcrypt.hash(password, 10);
             const userData=await userS.findByIdAndUpdate({_id:tokenData._id},{$set:{password:newpass,resetToken: null }},{new:true})
             res.status(200).send({msg:"password of the user has been reset",data:userData})
         }
         else
         {
             res.status(200).send({msg:"This link has been expired"})
         }
    }
    catch{
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
 
    }
 })
 
module.exports=router;
