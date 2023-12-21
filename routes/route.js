require("dotenv").config()
const express =require('express')
const formidable= require('express-formidable')
const bcrypt= require('bcrypt')
const parser=require('body-parser')
const randomstring=require('randomstring')
const jwt=require('jsonwebtoken')
const user=require('../Schemas/users')
require('../config/database').connect();
const router=express.Router();
const User = require('../Schemas/users')


router.post('/register',formidable(),async function(req,res){
    let{firstname,lastname,email,password}=req.fields;
    if(!(firstname && lastname && email && password)){
    res.status(400).send('please enter the all details..!')
    }
    else{

       if(await User.findOne({email})){
        res.send("User already exist")
       }
       else{
        const vtoken=randomstring.generate()


        let enc_password= await bcrypt.hash(password,10)
        
      let user = await User.create({
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
    let {email,password} = req.fields
    if (! (email && password)){
        res.status(400).send('Provide all the inputs')
    }
    else{
        let user = await User.findOne({email})

        if (user && (await bcrypt.compare(password, user.password)))
        {
            let token = jwt.sign({ user_id:user._id, email},
                process.env.TOKEN_KEY,
                 { expiresIn: "5h" });

            user.token = token

            res.json(user)
        }
        else{
            res.status(403).send('Incorrect username or password!!')
        }
    }
});
module.exports=router;
