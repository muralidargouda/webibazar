require('dotenv').config();
const express=require('express');

const app=express();
const PORT=process.env.API_PORT;

const userR=require('./routes/userroute');
const productR=require('./routes/productroute');
const orderR=require('./routes/orderroute')
const vendorR=require('./routes/vendorroute')
const cartR=require('./routes/cartroute')
const buyerR=require('./routes/buyerroute')

app.use("/user",userR);
app.use("/product",productR);
app.use('/order', orderR);
app.use('/vendor',vendorR)
app.use('/cart',cartR)
app.use('/buyer',buyerR)
app.listen(PORT,()=>{console.log(`Project is running at ${PORT} port.`);})