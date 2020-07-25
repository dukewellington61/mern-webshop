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
      (lineItem) =>
        JSON.parse(JSON.stringify(lineItem)).product_id === req.body.product_id
    );

    if (lineItem) {
      // if request comes from cart it has attribute quantity

      console.log(req.body.quantity);

      const updateQuantity = req.body.quantity || lineItem.quantity + 1;

      Cart.updateOne(
        {
          _id: cart._id,
          line_items: { $elemMatch: { _id: lineItem._id } },
        },
        { $set: { "line_items.$.quantity": updateQuantity } },
        function (err) {
          console.error(err);
        }
      );

      await cart.save();

      res.json({ quantity: updateQuantity, id: lineItem._id });
    } else {
      const newLineItem = {
        name: req.body.name,
        image_url: req.body.image_url,
        colour: req.body.colour,
        price: req.body.price,
        product_id: req.body.product_id,
      };

      cart.line_items.unshift(newLineItem);

      await cart.save();

      res.json(cart.line_items);
    }
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

    cart.line_items = cart.line_items.filter(
      (lineItem) => lineItem._id.toString() !== req.body.lineItem_id
    );

    await cart.save();

    res.json(cart.line_items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
