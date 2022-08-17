const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema
let Project = new Schema({
  id_builder: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
});
module.exports = mongoose.model("Project", Project);
