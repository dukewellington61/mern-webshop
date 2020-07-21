const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  line_items: [
    {
      quantity: {
        type: Number,
        default: 1,
      },
      name: {
        type: String,
      },
      image_url: {
        type: String,
      },
      colour: {
        type: String,
      },
      price: {
        type: Number,
        min: 0,
        max: 5000,
      },
       product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    },
  ],
});

module.exports = Cart = mongoose.model("cart", CartSchema);
