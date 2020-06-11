const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Orders route"));

module.exports = router;
