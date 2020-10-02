const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/user
// @desc    UPDATE USER's FIRSTNAME, LASTNAME, EMAIL
// @access  Public
router.put(
  "/",
  [
    auth,
    [
      check("firstname", "first name is required").not().isEmpty(),
      check("lastname", "last name is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email } = req.body;

    try {
      console.log(req.user.id);
      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(401).json({ msg: "User not found" });
      }

      // Update User Data
      user.firstname = firstname;
      user.lastname = lastname;
      user.email = email;

      await user.save();

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
