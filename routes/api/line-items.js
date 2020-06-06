const express = require("express");
const router = express.Router();

const LineItem = require("../../models/LineItem");
const Cart = require("../../models/Cart");

// @route   POST api/line-items
// @desc    Add line item to current cart
// @access  Public
router.post("/", async (req, res) => {
  try {
    const cart = await Cart.findById(req.body.cart_id);

    const newLineItem = new LineItem({
      product_id: req.body.product_id,
    });

    const lineItem = cart.lineItems.find(
      (lineItem) => lineItem.product_id !== req.body.product_id
    );

    console.log(lineItem);

    if (lineItem) {
      console.log(lineItem.quantity);
      lineItem.quantity = lineItem.quantity + 1;
      console.log(lineItem.quantity);
    } else {
      cart.lineItems.unshift(newLineItem);
    }

    await cart.save();

    res.json(lineItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
