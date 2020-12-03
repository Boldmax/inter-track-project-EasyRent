const mongoose = require("mongoose");

const eSchema = new mongoose.Schema({
  Area:{
    type : String,
    required : true
},
  Size:{
    type : String,
    required : true
  },
  Price:{
    type : Number,
    required : true
  }
}
);

const eRentSchema = mongoose.model('Rents', eSchema);
module.exports = eRentSchema;