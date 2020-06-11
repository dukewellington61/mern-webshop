const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Cart = require("../../models/Cart");

// @route   POST api/carts
// @desc    Create cart
// @access  Public / Private
router.post("/", async (req, res) => {
  try {
    const cart = new Cart({});

    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/carts/:user_id
// @desc    Get cart by user id
// @access  Private
router.get("/:user_id", async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.params.user_id,
    });

    if (!cart) {
      return res.status(400).json({ msg: "User doesn't have a cart" });
    }

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "User doesn't have a cart" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/carts/:id
// @desc    Delete cart by id
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    await cart.remove();

    return res.json({ msg: "Cart removed" });
  } catch (err) {
    console.error(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Cart not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
