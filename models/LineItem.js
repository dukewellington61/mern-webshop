const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LineItemSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = LineItem = mongoose.model("lineItem", LineItemSchema);
