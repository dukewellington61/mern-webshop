const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Order = require("../../models/Order");

// @route   POST api/order/
// @desc    Create order
// @access  Private
router.post("/", auth, async (req, res) => {
  const { firstname, lastname, invoice_items } = req.body;

  try {
    const order = new Order({
      user_id: req.user.id,
      firstname,
      lastname,
      invoice_items,
    });

    await order.save();

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
