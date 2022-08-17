const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema
let Store = new Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Store", Store);
