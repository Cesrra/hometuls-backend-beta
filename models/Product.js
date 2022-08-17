const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema
let Product = new Schema({
  id_store: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Product", Product);
