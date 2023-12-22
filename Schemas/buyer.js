const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'order',
    },
  ],
  address: {
    street: String,
    place: String,
    pinCode: String,
    state: String,
    country: String
  },
  paymentModes: [
    {
      cardNumber: String,
      cardHolderName: String,
      expirationDate: String,
    },
  ],
});

module.exports = mongoose.model('buyer', buyerSchema);

