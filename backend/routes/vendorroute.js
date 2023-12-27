const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');

const vendorS = require('../Schemas/vendor');
const productS = require('../Schemas/product');
const userS=require('../Schemas/user');

router.post('/createV',formidable(), async (req, res) => {
  try {
    const { user,company,about,vendorInfo } = req.fields;
    const vendorExist = await vendorS.findOne({ user:user._id });

    if (vendorExist) {
      return res.json('Vendor already exists for this user')
    }

    const vendor = await vendorS.create({
      user,
      company,
      about,
      vendorInfo: {
        email: vendorInfo.email ,
        phoneNumber: vendorInfo.phoneNumber,
        address: vendorInfo.address,
      }
    });

    await userS.findByIdAndUpdate(user, { $set: { role: 'vendor', vendorId: vendor._id } });

     res.json(vendor);
    } 
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/get-products/:vendorId', formidable(),async (req, res) => {
  try {
    const { vendorId } = req.params;

    const vendor = await vendorS.findById(vendorId).populate('products');

    if (!vendor) {
      return res.status(404).json({ error: 'Vendor is not found' });
    }

    res.json(vendor.products);
  } catch (error) {
    res.status(500).json({ error:'Internal Server Error' });
  }
});

module.exports = router;