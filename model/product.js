const mongoose = require('mongoose')

const prodSchema=new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    category: { type: String, default: '' },
    price: {type: Number,required: true, default: ''},
    quantity: {type: Number, default: ''},
    image: {type: String, default: ''}

    });

    module.exports=mongoose.model("products",prodSchema)