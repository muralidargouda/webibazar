const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const cartS = require('../Schemas/cart');
const productS = require('../Schemas/product');
const userS = require('../Schemas/user');

router.post('/add_to_cart', formidable(), async (req, res) => {
  try {
    const { user,items } = req.fields;
    let person= await userS.findById(user);

    if (!person) {
      return res.status(404).json({ error: 'User not found' });
    }

    let cart = await cartS.findOne({ user });

    if (!cart) {
      cart = await cartS.create({ user, items: [] });
      await userS.findByIdAndUpdate(user, { $set: { cartId: cart._id } });

    }
    const abc=[];
    for (const item of items) {
      const { product: productId, quantity } = item;

      const pDetails = await productS.findById(productId);
      if (!pDetails) 
      {
       abc.unshift({ error: 'Product is not found' });
        continue;
      }

      const avlQuantity = pDetails.inventory || 0;
      if (quantity > avlQuantity) {
        abc.unshift('No enough quantity of product');
        continue; 
      }
      const itemExist = cart.items.find(item => item.product.equals(pDetails._id));

      if (itemExist) {
        itemExist.quantity += quantity || 1;
      } else {
        cart.items.push({ product: pDetails._id, quantity: quantity || 1 });
      }
    }
    await cart.save();

    if(abc.length==0) res.json(cart)

    else  res.json({abc})
    } 
     catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/get_cart/:userId', formidable(), async (req, res) => {
  try {
    const userId = req.params.userId;
    const cart = await cartS.findOne({ user: userId })

    if (!cart) {
      return res.status(404).json({ error: 'Cart is not found ,plz check' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error:'Internal Server Error'});
  }
});

module.exports = router;