const date = new Date();
const timestamp =
  date.getFullYear() +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  ("0" + date.getDate()).slice(-2) +
  ("0" + date.getHours()).slice(-2) +
  ("0" + date.getMinutes()).slice(-2) +
  ("0" + date.getSeconds()).slice(-2);

const shortCode = process.env.MPESA_PAYBILL;
const passkey = process.env.MPESA_PASSKEY;

const stk_password = new Buffer.from(shortCode + passkey + timestamp).toString(
  "base64"
);

module.exports = { stk_password, timestamp };
