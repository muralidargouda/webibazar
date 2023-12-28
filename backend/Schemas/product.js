const mongoose = require('mongoose')

const prodSchema=new mongoose.Schema({
    name: { type: String, required:true },
    description: { type: String,required:true },
    category: { type: String, required:true},
    price: {type: Number,required: true},
    inventory: {type: Number,default: 0},
    quantity: {type: Number, required:true},
    // image: {type: String, default: ''},
    orders:[
        { type: mongoose.Schema.Types.ObjectId,
          ref: 'order',
        },
      ],
      vendorId:{ type: mongoose.Schema.Types.ObjectId, ref: 'vendor' } 
    
    

    });

    module.exports=mongoose.model("product",prodSchema)