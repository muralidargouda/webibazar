require('dotenv').config();
const express=require('express');

const app=express();
const PORT=process.env.API_PORT;

const routes=require('./routes/route');
const productsroutes=require('./routes/productroute');
// const orderRoutes=require('/orderroute')

app.use("/api",routes);
app.use("/products",productsroutes);
// app.use('/orders', orderRoutes);

app.listen(PORT,()=>{console.log(`Project is running at ${PORT} port.`);})