const generateTokenMiddleware = async (req, res, next) => {
  const key = process.env.B2C_CONSUMER_KEY;
  const secret = process.env.B2C_SECRET_KEY;
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
      //   resp.status(200).json(res.data);
      token = res.data.access_token;
      // console.log(token);

      next();
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = generateTokenMiddleware;
