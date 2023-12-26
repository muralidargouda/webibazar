const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',required: true,
  },
  address: {
    street: String,
    place: String,
    pinCode: String,
    state: String,
    country: String
  },
 
});

module.exports = mongoose.model('buyer', buyerSchema);

