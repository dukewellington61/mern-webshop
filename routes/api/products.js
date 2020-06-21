const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const User = require("../../models/User");
const Product = require("../../models/Product");

// @route   POST api/products
// @desc    Create Product
// @access  Public
router.post(
  "/",
  [
    auth,
    [
      check("name", "product name is required").not().isEmpty(),
      check("description", "description is required").not().isEmpty(),
      check("image_url", "image url is required").not().isEmpty(),
      check("colour", "colour is required").not().isEmpty(),
      check("price", "enter a proper montary value").isCurrency(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, image_url, colour, price } = req.body;

    try {
      const user = await User.findById(req.user.id);

      if (!user.admin) {
        return res
          .status(400)
          .json({ msg: "Only admins can add new products" });
      }

      product = new Product({
        name,
        description,
        image_url,
        colour,
        price,
      });

      await product.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/products/:id
// @desc    Get product by id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.send(product);
  } catch (err) {
    console.error(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   POST api/products/:id/review
// @desc    Create a review
// @access  Private
router.post(
  "/:id/review",
  [auth, [check("review", "Review is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(401).json({ msg: "Product not found" });
      }

      const review = {
        user_id: user._id,
        user_name: user.firstname,
        review: req.body.review,
        rating: req.body.rating,
      };

      product.reviews.unshift(review);

      await product.save();

      res.json(product);
    } catch (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).json({ msg: "Product not found" });
      }
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
