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
    const browserCart = req.body.browser_cart;

    const userCart = req.body.user_cart;

    const updatedUserCart = await Cart.findById(userCart._id);

    const updatedBrowserCart = await Cart.findById(browserCart._id);

    let arrayOfLineItems = browserCart.line_items.concat(userCart.line_items);

    // updates line_item quantity
    // (is browser_cart has line_items, that user_cart has also, user_cart.line_item.quantity is updated)
    arrayOfLineItems.map((line_item, i, array) =>
      array.forEach((array_item, j) => {
        if (line_item.product_id === array_item.product_id && i != j)
          line_item.quantity += array_item.quantity;
      })
    );

    // after updating line_item quantity, newArr has still all the objects i.e. duplicates
    // next lines of code remove duplicates from array of line_item objects
    let arrNoDuplicates = arrayOfLineItems.filter(
      (line_item, index, array) =>
        index ===
        array.findIndex(
          (array_item) => array_item.product_id === line_item.product_id
        )
    );

    updatedUserCart.line_items = arrNoDuplicates;

    updatedUserCart.save();

    // removes line_items from browser cart on user log in
    updatedBrowserCart.line_items = [];

    updatedBrowserCart.save();

    res.json(arrNoDuplicates);
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
