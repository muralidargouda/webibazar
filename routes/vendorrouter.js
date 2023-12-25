const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');

const Vendor = require('./Schemas/vendor');
const Product = require('./Schemas/product');
const User=require('./Schemas/user');

router.post('/create',formidable(), async (req, res) => {
  try {
    const { user } = req.fields;
    const vendorExist = await vendor.findOne({ user });

    if (vendorExist) {
      return res.json('Vendor already exists for this user')
    }

    const vendor = await vendor.create({
      user,
      products: [],
    });

    await User.findByIdAndUpdate(user, { $set: { role: 'vendor', vendorId: vendor._id } });

     res.json(vendor);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/add-product',formidable(), async (req, res) => {
    try {
      const { user, productInfo } = req.fields;
  
      const vendor = await vendor.findOne({ user });
  
      if (!vendor) {
        return res.status(404).json({ error: 'Vendor not found' });
      }
  
      let productExist = await Product.findOne({ name: productInfo.name });
  
      if (!productExist) {
        productExist = await Product.create(productInfo);
      }
  
      vendor.products.push(productExist._id);
      await vendor.save();
  
      res.json(vendor);

    } 
    catch (error) {
      res.status(500).json({ error:'Internal Server Error' });
    }
  });
  


router.get('/get-products/:vendorId', formidable(),async (req, res) => {
  try {
    const { vendorId } = req.params;

    const vendor = await Vendor.findById(vendorId).populate('products');

    if (!vendor) {
      return res.status(404).json({ error: 'Vendor is not found' });
    }

    res.json(vendor.products);
  } catch (error) {
    res.status(500).json({ error:'Internal Server Error' });
  }
});

module.exports = router;