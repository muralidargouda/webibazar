const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const Cart = require('./Schemas/cart');
const Product = require('./Schemas/product');

router.post('/add-to-cart', formidable(), async (req, res) => {
  try {
    const { user, items } = req.fields;

    let cart = await Cart.findOne({ user });

    if (!cart) {
      cart = await Cart.create({ user, items: [] });
    }

    const itemsArray = Array.isArray(items) ? items : [items];

    for (const item of itemsArray) {
      const { product: productId, quantity } = item;

      const pDetails = await Product.findById(productId);

      if (!pDetails) {
        return res.status(404).json({ error: 'Product is not found' });
      }

      const itemExist = cart.items.find(item => item.product.equals(pDetails._id));

      if (itemExist) {
        itemExist.quantity += quantity || 1;
      } else {
        cart.items.push({ product: pDetails._id, quantity: quantity || 1 });
      }
    }
    await cart.save();
    res.json(cart);
     } 
     catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/get-cart/:userId', formidable(), async (req, res) => {
  try {
    const userId = req.query.userId;
    const cart = await Cart.findOne({ user: userId }).populate('items.product', 'name price');

    if (!cart) {
      return res.status(404).json({ error: 'Cart did not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error:'Internal Server Error'});
  }
});

module.exports = router;