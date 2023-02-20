const encryptPass = require("./encryptPass");
const initiateB2c = require("./initiateb2c");
const generateTokenMiddleware = require("./tokenMiddleware");

module.exports = {
  encryptPass,
  initiateB2c,
  generateTokenMiddleware,
};
