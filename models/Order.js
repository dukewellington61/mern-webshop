const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  order_number: {
    type: String,
    required: true,
  },
  invoice_items: [
    {
      name: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      colour: {
        type: String,
      },
      price: {
        type: Number,
        min: 0,
        max: 5000,
      },
      image_url: {
        type: String,
      },
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    },
  ],
});

module.exports = Order = mongoose.model("order", OrderSchema);
