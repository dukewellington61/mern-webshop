const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Cart = require("../../models/Cart");
const User = require("../../models/User");

// @route   POST api/carts
// @desc    Create cart
// @access  Public / Private
router.post("/", auth, async (req, res) => {
  try {
    // const user = await User.findById(req.user.id);

    const cart = new Cart({
      user: req.user.id,
    });

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

// @route   api/carts/
// @desc    Update cart
// @access  Private
router.put("/", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: "Post does not exist" });
    }

    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    comment.text = req.body.text;

    await post.save();

    res.send(post.comments);
  } catch (err) {
    console.error(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
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
