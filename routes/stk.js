const express = require("express");
const router = express.Router();
const {
  generateAccessToken,
  stkPush,
  stkQuery,
  handleStkCallback,
} = require("../Controllers/LNM_STK");

router.post("/push", generateAccessToken, stkPush);
router.post("/query/:checkoutRequestId", generateAccessToken, stkQuery);
router.post("/callback-handler", handleStkCallback);

module.exports = router;
