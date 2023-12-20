const mongoose = require('mongoose')
const MONGO_URI=process.env.MONGO_URI;

  exports.connect=()=>{

    mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to database!'))
  .catch(() => console.log('Error in connection..!'));


  }