const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  lineItems: [],
});

module.exports = Cart = mongoose.model("cart", CartSchema);
