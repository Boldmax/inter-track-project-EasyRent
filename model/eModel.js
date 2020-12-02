const mongoose = require("mongoose");
const schema = mongoose.Schema();

const eSchema = new schema({
 
}
)

const eRentSchema = mongoose.model('eRents', eSchema);
module.exports = eRentSchema;