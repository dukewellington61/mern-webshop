const express = require("express");
const router = express.Router();

const LineItem = require("../../models/LineItem");

// @route   POST api/carts
// @desc    Create line item
// @access  Public
router.post("/", async (req, res) => {
  try {
    const lineItem = new LineItem({
      product_id: req.body.product_id,
      cart_id: req.body.cart_id,
    });

    await lineItem.save();

    res.json(lineItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
