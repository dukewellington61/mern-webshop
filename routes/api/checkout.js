const express = require("express");
const cors = require("cors");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51H9aCqGnYOPoEHalx696AcqYwRYaghlauUjRd7pvi0xK2MvBu9ghMyXmx0QbtsXk389DPeHMj8Gm4ShTUCLc5W8Y00sCanfRRM"
);
const { v4: uuidv4 } = require("uuid");
router.use(cors());

// @route   POST api/checkout
// @desc    Process stripe payment in the backend
// @access  Private
router.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
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
        idempotency_key,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

module.exports = router;
