require("dotenv").config()
const express=require('express')
const formidable= require('express-formidable')
require('./config/database').connect();

const app= express()
const PORT = process.env.API_PORT;

const User = require('./model/users')

app.post('/register',formidable(),async function(req,res){
    let{firstname,lastname,email,password}=req.fields;
    if( ! (firstname && lastname && email && password)){
    res.status(400).send('please enter the all details..!')
    }
    else{

       if(await User.findOne({email})){
        res.send("User already exist")
       }
       else{
        
      let user = await User.create({
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password
                })
        res.json(user)

       }

    }
})





app.listen(PORT,()=>{console.log(`Project is running at ${PORT} port.`);})