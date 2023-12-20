const mongoose = require('mongoose')

const prodSchema=new mongoose.Schema({
    pname: { type: String, default: '' },
    pdisc: { type: String, default: '' },
    pimage: { type: String, default: '' },
    pprice: {type: String, default: ''}});

    module.exports=mongoose.model("product",prodSchema)