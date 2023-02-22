const axios = require("axios");
const { stk_password, timestamp } = require("../../utils/stkPassword");

const stkQuery = async (req, res) => {
  const CheckoutRequestID = req.params.checkoutRequestId;
  try {
    const resp = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query",
      {
        BusinessShortCode: shortCode,
        Password: stk_password,
        Timestamp: timestamp,
        CheckoutRequestID: CheckoutRequestID,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res.status(200).json(resp.data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = stkQuery;
