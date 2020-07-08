const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Cart = require("../../models/Cart");

// @route   POST api/cart/
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

// @route   PUT api/cart/
// @desc    Create cart for user
// @access  Public / Private
router.put("/", auth, async (req, res) => {
  try {
    const cart = new Cart({ user: req.user.id });

    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/cart/
// @desc    Get cart by user id
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
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

// @route   GET api/cart/id
// @desc    Get cart by user id
// @access  Private
router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(400).json({ msg: "Cart doesn't exist" });
    }

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Cart doesn't exist" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/cart/:id
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
