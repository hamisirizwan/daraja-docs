const express = require("express");
const router = express.Router();
const {
  encryptPass,
  initiateB2c,
  generateTokenMiddleware,
} = require("../Controllers/B2C");

//routes
router.post("/encrypt-pass", encryptPass);
router.post("initiate-b2c", generateTokenMiddleware, initiateB2c);

module.exports = router;
