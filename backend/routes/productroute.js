const express=require('express');
require('dotenv').config();
const formidable=require('express-formidable');
const multer=require('multer');
const productS = require('../Schemas/product');
const vendorS=require('../Schemas/vendor');

const router=express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads"); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
    const upload=multer({storage:storage});

//Adding the product
  router.post('/addproducts', upload.single('imageUrl'),async function(req, res){
    try{
    
            let{name,description,price,category,inventory,vendorId}=req.body;
            const imageUrl = req.file.filename;
        const vendor = await vendorS.findById(vendorId);
        if (!vendor) {
          return res.status(404).send('Vendor is not found');
        }

     const productExist = await productS.findOne({ name, vendorId });

    if (productExist) {
      productExist.inventory += parseInt(inventory, 10) || 0;
      await productExist.save();
      return res.json(productExist);
    }
            
            const product = await productS.create({
            name: name,
            description: description,
            price: price,
            category:category,
            vendorId: vendorId,
            inventory: inventory,
            quantity: parseInt(inventory, 10) || 0,
            imageUrl:imageUrl,
        })
    
        vendor.products.push(product._id);
        await vendor.save();
    

        res.json(product)
    }
       catch (error) {
          res.status(400).json({error: error.message});
        }
      });

//getting the products with filter of category

      router.get('/getproducts/:id', async function(req, res) {

        try {
          const productId = req.params.id;
          const query = productId ? { productId } : {};
          const products = await productS.find(query);
          res.json(products);
          } 
        catch (error) {
          res.status(500).json({ message: "Product not found" });
        }
      });

//getting all the products

      router.get('/getproducts',async function(req, res){
        try {
          const products = await productS.find();
          res.json(products);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
      module.exports=router;