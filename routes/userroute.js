require("dotenv").config()
const express =require('express')
const formidable= require('express-formidable')
const bcrypt= require('bcrypt')
const parser=require('body-parser')
const randomstring=require('randomstring')
const jwt=require('jsonwebtoken')
const userS=require('../Schemas/user')
require('../config/database').connect();
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
module.exports=router;
