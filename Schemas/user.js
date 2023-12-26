const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    firstname: { type: String},
    lastname: { type: String},
    email: { type: String},
    password: {type: String},
    token:{type:String},
    orders: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'orderS',
        }],
      role: { type: String, default: 'customer' }, 
      vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor'},
      cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'cart'},
      buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'buyer'} 
});


    module.exports=mongoose.model("user",userSchema)