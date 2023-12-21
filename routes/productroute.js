const express=require('express');
require('dotenv').config();
const formidable=require('express-formidable');
const multer=require('multer');
const product = require('../Schemas/product');
const router=express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/uploads"); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload=multer({storage:storage});



  router.post('/addproducts', upload.single('imageUrl'),async function(req, res){
    try{
    
            let{name,description,price,quantity,category}=req.body;
            const imageUrl = req.file.filename;
            
            const product = await product.create({
            name: name,
            description: description,
            price: price,
            quantity:quantity,
            category:category,
            imageUrl:imageUrl,
        })
    
        res.json(product)
    }
       catch (error) {
          res.status(400).json({ message: error.message });
        }
      });
      module.exports=router;