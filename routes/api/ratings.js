const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Ratings route"));

module.exports = router;
