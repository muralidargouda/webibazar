const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  company: {type: String,required: true,},
  about:{ type:String},
  products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    }],
    Vemail: {type: String},
    VphoneNumber: {type:String},
    Vaddress: {
      street: String,
      place: String,
      pinCode: String,
      state: String,
      country: String
    },
  
  rating: {
    type: Number,default: 0,
  },
});

module.exports = mongoose.model('vendor', vendorSchema);

