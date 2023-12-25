const express = require('express');
const router = express.Router();
const order = require('./Schemas/order');
const user = require('./Schemas/user');
const product = require('./Schemas/product');
const formidable=require('express-formidable')

router.post('/createorder',formidable(), async (req, res) => {
  try {
    const { user, products } = req.fields;
    const userDetails = await user.findById(user);


    let totalPrice = 0;

    for (const product of products) {
    const pDetails = await product.findById(product.product);
    totalPrice += pDetails.price * product.quantity;
    }
      

    const order = await order.create({
      user,
      products,
      totalPrice,
    });

    await user.findByIdAndUpdate(user, { $push: { orders: order._id } });


    for (const product of products) {
      await product.findByIdAndUpdate(product.product, { $push: { orders: order._id } });
    }

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;