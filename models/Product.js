const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    requires: true,
  },
  tag_line: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
    min: 0,
    max: 5000,
  },
  reviews: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      user_name: {
        type: String,
      },
      review: {
        type: String,
      },
      rating: {
        type: Number,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
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
