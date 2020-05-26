const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    requires: true,
  },
  description: {
    type: String,
    requires: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
