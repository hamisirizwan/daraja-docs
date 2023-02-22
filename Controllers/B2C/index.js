const encryptPass = require("./encryptPass");
const handleCallback = require("./handleB2Ccallback");
const initiateB2c = require("./initiateb2c");
const handleTimeOut = require("./timeoutHandler");
const generateTokenMiddleware = require("./tokenMiddleware");

module.exports = {
  encryptPass,
  initiateB2c,
  generateTokenMiddleware,
  handleCallback,
  handleTimeOut,
};
