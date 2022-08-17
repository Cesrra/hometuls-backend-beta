const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema
let Builder = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  type_builder: {
    type: String,
    required: true,
  },
  building_company: {
    type: Number,
    required: true
  },
  logo: {
    type: Date,
  },
});
module.exports = mongoose.model("Builder", Builder);
