const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Order = require("../../models/Order");

// @route   POST api/order/
// @desc    Create order
// @access  Private
router.post("/", auth, async (req, res) => {
  const { firstname, lastname, invoice_items, customer_id } = req.body;

  const order_number = "";

  try {
    const order = new Order({
      user_id: req.user.id,
      firstname,
      lastname,
      order_number,
      invoice_items,
    });

    // add order number
    const orders = await Order.find({ user_id: req.user.id });
    order.order_number = customer_id + "-" + orders.length;

    await order.save();

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   Get api/latest-order
// @desc    Get latest order
// @access  Private
router.get("/latest_order", auth, async (req, res) => {
  try {
    const latestOrder = await Order.find().sort({ date: -1 }).limit(1);

    res.json(latestOrder[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   Get api/orders/
// @desc    Get orders by user_id
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.user.id });

    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
