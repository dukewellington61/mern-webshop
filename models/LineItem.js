const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LineItemSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = LineItem = mongoose.model("lineItem", LineItemSchema);
