const express = require("express");
const cors = require("cors");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const auth = require("../../middleware/auth");
const keys = require("../../config/keys");

require("dotenv").config();
const stripe = require("stripe")(keys.stripeSecretKey);

router.use(cors());

// @route   POST api/checkout
// @desc    Process stripe payment in the backend
// @access  Private
router.post("/", auth, async (req, res) => {
  console.log(keys.stripeSecretKey);
  try {
    const { token, total, user } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: Math.round(total * 100),
        currency: "eur",
        customer: customer.id,
        receipt_email: token.email,
        description: `${user.firstname} ${user.lastname}'s shopping cart`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );

    res.status(200).send("Payment successfully processed");
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }

  // res.json({ error, status });
});

module.exports = router;
