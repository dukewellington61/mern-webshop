const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const User = require("../../models/User");
const Cart = require("../../models/Cart");

// @route   POST api/user/signup
// @desc    Register user and update current shopping cart with user_id
// @access  Public
router.post(
  "/signup",
  [
    check("firstname", "first name is required").not().isEmpty(),
    check("lastname", "last name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password, cart_id } = req.body;

    try {
      // See if the user exists
      let user = await User.findOne({
        email,
      });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists " }] });
      }

      // Create new user
      user = new User({
        firstname,
        lastname,
        email,
        password,
      });

      // create customer id
      const randomInt = Math.floor(100000 + Math.random() * 900000).toString();
      const id = randomInt.padStart(9, "0");
      user.customer_id = id;

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Update current shopping cart with user id
      cart = await Cart.findOneAndUpdate(
        { _id: cart_id },
        { user: user.id },
        { new: true }
      );

      // Return json web token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/login",
  // [
  //   check("email", "Please include a valid email").not().isEmpty(),
  //   check("password", "Password is required").not().isEmpty(),
  // ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({
        email,
      });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      // Return json web token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   POST api/auth/change-password
// @desc    Check if old password is correct and enter new password to DB
// @access  Private
router.put(
  "/change-password",
  auth,
  [
    check("old_password", "Please enter your old password").exists(),
    check("new_password", "Please enter your new password").exists(),
    check("confirm_password", "Please confirm your new password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { old_password, new_password, confirm_password } = req.body;

    try {
      let user = await User.findById(req.user.id);

      const isMatch = await bcrypt.compare(old_password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Wrong password" }] });
      }

      if (new_password != confirm_password) {
        return res.status(400).json({
          errors: [{ msg: "Passwords don't match" }],
        });
      }

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(new_password, salt);

      await user.save();

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
