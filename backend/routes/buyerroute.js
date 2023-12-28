const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const buyerS = require('../Schemas/buyer');
const userS=require('../Schemas/user');

router.post('/create_buyer', formidable(), async (req, res) => {
  try {
    const { user,address } = req.fields;

    if (!user) {
      return res.status(400).json({ error: 'User ID is must required' });
    }

    const buyer = await buyerS.create({
      user,
      address: address || {},
    });

    await userS.findByIdAndUpdate(user, { $set: { role:'buyer',buyerId: buyer._id } });
    await buyer.save();

    res.status(201).json(buyer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;