const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

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

// @route   PUT api/line-items/update
// @desc    Add line items from not logged in user to logged in user's cart
// @access  Private
router.put("/update", auth, async (req, res) => {
  try {
    const browser_cart = req.body.browser_cart;

    const user_cart = req.body.user_cart;

    // if user_cart.line_items has line_items in browser_cart.line_items already
    // --> update quantitiy of those line_items in user cart
    // else: add line_items to those already in user_cart

    // if line_item.product_id (in user_cart) === line_item_product_id (in browser_cart)
    // --> update value of line_item.quantity (in user_cart)

    // const line_item_product_ids = user_cart.line_items.map(
    //   (line_item) => line_item.product_id
    // );

    const indizes = browser_cart.line_items.map((browser_cart_line_item) =>
      user_cart.line_items.findIndex(browser_cart_line_item)
    );

    console.log(indizes);

    // const isDuplicate = browser_cart.some((line_item) => line_item.product_id);

    // res.json(newArr);

    // console.log(newArr);
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
