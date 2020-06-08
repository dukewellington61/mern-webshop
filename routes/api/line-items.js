const express = require("express");
const router = express.Router();

const Cart = require("../../models/Cart");

// @route   POST api/line-items
// @desc    Add line item to current cart
// @access  Public
router.post("/", async (req, res) => {
  try {
    const cart = await Cart.findById(req.body.cart_id);

    const lineItem = cart.line_items.find(
      (lineItem) => lineItem.product_id.toString() === req.body.product_id
    );

    if (lineItem) {
      const updateQuantity = lineItem.quantity + 1;

      Cart.updateOne(
        {
          _id: cart._id,
          line_items: { $elemMatch: { _id: lineItem._id } },
        },
        { $set: { "line_items.$.quantity": updateQuantity } },
        function (err) {
          console.log(err);
        }
      );
    } else {
      const newLineItem = new LineItem({
        product_id: req.body.product_id,
      });

      cart.line_items.unshift(newLineItem);

      await cart.save();
    }

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   Put api/line-items
// @desc    Remove line item from current cart
// @access  Public
router.put("/", async (req, res) => {
  try {
    const cart = await Cart.findById(req.body.cart_id);

    const lineItem = cart.line_items.find(
      (lineItem) => lineItem._id.toString() === req.body.lineItem_id
    );

    if (lineItem && lineItem.quantity > 1) {
      const updateQuantity = lineItem.quantity - 1;

      Cart.updateOne(
        {
          _id: cart._id,
          line_items: { $elemMatch: { _id: lineItem._id } },
        },
        { $set: { "line_items.$.quantity": updateQuantity } },
        function (err) {
          console.log(err);
        }
      );
    } else if (lineItem && lineItem.quantity === 1) {
      cart.line_items = cart.line_items.filter(
        (lineItem) => lineItem._id.toString() !== req.body.lineItem_id
      );

      await cart.save();
    }

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
