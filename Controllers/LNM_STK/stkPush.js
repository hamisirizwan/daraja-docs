const axios = require("axios");
const { stk_password, timestamp } = require("../../utils/stkPassword");

const stkPush = async (req, res) => {
  const shortCode = process.env.MPESA_SHORTCODE;
  try {
    const resp = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortCode,
        Password: stk_password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: 10,
        PartyA: "254768793923",
        PartyB: shortCode,
        PhoneNumber: "254768793923",
        CallBackURL: "https://yourdomain/api/stk/callback-handler",
        AccountReference: "account number",
        TransactionDesc: "any",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //if push successfull
    console.log(resp.data);
    res.status(200).json(resp.data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = stkPush;
