const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const Buyer = require('../Schemas/buyer');
const User=require('./Schemas/user');

router.post('/create-buyer', formidable(), async (req, res) => {
  try {
    const { user, address, paymentModes } = req.fields;

    if (!user) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const buyer = await Buyer.create({
      user,
      address: address || {},
      paymentModes: paymentModes || [],
    });

    await User.findByIdAndUpdate(user, { $set: { role: 'buyer', buyerId: buyer._id } });
    await buyer.save();

    res.status(201).json(buyer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;