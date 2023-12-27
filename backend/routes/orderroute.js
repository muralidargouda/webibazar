const express = require('express');
const router = express.Router();
const formidable=require('express-formidable');

const orderS = require('../Schemas/order');
const productS = require('../Schemas/product');
const userS = require('../Schemas/user');
const cartS = require('../Schemas/cart');
const buyerS = require('../Schemas/buyer');

router.post('/addorder',formidable(), async (req, res) => {

  try {
    const {userId} = req.fields;

    const user = await userS.findById(userId);

    if (!user || !user.cartId || !user.buyerId) {
      return res.status(404).json({ error: 'User, cart, or buyer details not found of the user' });
    }
    const cart = await cartS.findById(user.cartId);
    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ error: 'Add the products, your Cart is empty, Cannot place an order.' });
    }
    const buyer = await buyerS.findById(user.buyerId);
    if (!buyer) {
      return res.status(404).json({ error: 'Buyer is not found of the user' });
    }

//Ordering items

  const itemsOrdered = [];
  for (const item of cart.items) {
    const product = await productS.findById(item.product);

    if (!product) {
      return res.status(404).send('Product is not found');
    }

    itemsOrdered.push({
    product: product._id,
    quantity: item.quantity,
    price: product.price,
  });
}
//Totaling the amount

  const totalPrice = itemsOrdered.reduce((total, item) => {
    return total + (item.price * item.quantity)
  },0);

  console.log('totalAmount:', totalAmount);
    for (let item of cart.items) {
      const product = await productS.findById(item.product);
      product.inventory -= parseInt(item.quantity ,10);
      await product.save();
    }

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 14);

    const order = await orderS.create({
      user: userId,
      items: itemsOrdered,
      address: buyer.address,
      totalPrice: totalPrice,
      deliveryDate: deliveryDate, 
      status:'shipping'
    });

  user.orders.push(order._id);
  await user.save();

  cart.items = [];
  await cart.save();

  for(let item of itemsOrdered) {
    const product = await productS.findById(item.product);
  
    if (!product) {
      return res.status(404).send('Product is not found');
    }
  
    product.orders.push(order._id);
    await product.save();
  }
//Billing
  const billResponse = {
    order: order._id,
    address: buyer.address,
    totalBill: totalPrice,
    deliveryDate: deliveryDate.toISOString(),
    items: itemsOrdered,
  };

  res.json(billResponse);

  console.log('Order is placed')

  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;