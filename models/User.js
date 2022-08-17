const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  birthdate: {
    type: Date,
  },
  location: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
});
module.exports = mongoose.model("User", User);
