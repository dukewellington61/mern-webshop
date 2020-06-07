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
      (lineItem) => lineItem.product_id == req.body.product_id
    );

    if (lineItem) {
      const updateQuantity = lineItem.quantity + 1;

      Cart.updateOne(
        {
          _id: cart._id,
          lineItems: { $elemMatch: { _id: lineItem._id } },
        },
        { $set: { "lineItems.$.quantity": updateQuantity } },
        function (err) {
          console.log(err);
        }
      );
    } else {
      cart.lineItems.unshift(newLineItem);
    }

    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
