const axios = require("axios");

const generateAccessToken = async (req, res, next) => {
  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_SECRET_KEY;
  const auth = new Buffer.from(`${key}:${secret}`).toString("base64");

  await axios
    .get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then((res) => {
      token = res.data.access_token;
      // console.log(token);

      next();
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = generateAccessToken;
