const mongoose = require('mongoose')


const orderSchema= new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',required: true
          },
          items: [],
          totalPrice:{type:Number,required:true},
          address:{type:String},
          status:{type:String},
          deliveryDate:{type:Date}
        }
)
module.exports =mongoose.model('order', orderSchema);