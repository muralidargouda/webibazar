require("dotenv").config()
const express =require('express')
const formidable= require('express-formidable')
const bcrypt= require('bcrypt')
const parser=require('body-parser')
const randomstring=require('randomstring')

const jwt=require('jsonwebtoken')
const user=require('./model/users')
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
        const vtoken=randomstring.generate()


        let enc_password= await bcrypt.hash(password,10)
        
      let user = await User.create({
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:enc_password,
                token:vtoken
                })
        res.json(user)

       }

    }
})

app.post('/login',async(req,res)=>
{
    const {email,password}=req.body
    if(email && password)
    {
        try
        {
        const checkUser=await user.findOne({email:email})
          if(checkUser)
            {
                const checkPassword=await bcrypt.compare(password,checkUser.password)
                if(checkPassword)
                {
                    const token=jwt.sign({userId:checkUser._id,email:checkUser.email},
                      process.env.SECRET_KEY,{expiresIn:'10m'})
                      res.status(200).json({token:token})
                }
                else
                {
                    return res.status(400).send('Password is wrong')
                }
            }
            else
            {
                return res.status(400).send('User not found')
            }
        }
        catch(error)
        {
            return res.status(400).send('Cant able to LogIn')
        }
    }
    else
    {
        return res.status(400).send('give email and password')
    }
})

app.listen(PORT,()=>{console.log(`Project is running at ${PORT} port.`);})