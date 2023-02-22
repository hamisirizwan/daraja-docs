const express = require("express");
const router = express.Router();
const {
  encryptPass,
  initiateB2c,
  generateTokenMiddleware,
  handleCallback,
  handleTimeOut,
} = require("../Controllers/B2C");

//routes
router.post("/encrypt-pass", encryptPass);
router.post("/initiate-b2c", generateTokenMiddleware, initiateB2c);
router.post("/b2c-callback-handler", handleCallback);
router.post("/timeout-handler", handleTimeOut);
module.exports = router;
