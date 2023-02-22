const axios = require("axios");

const initiateB2c = async (req, res) => {
  try {
    //this request assumes you have added generate token middleware. If not check the code and add the middleware
    const resp = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest",
      {
        InitiatorName: process.env.B2C_INITIATOR_NAME,
        SecurityCredential: process.env.B2C_SECRET_CRED,
        CommandID: "BusinessPayment", //SalaryPayment , BusinessPayment ,PromotionPayment
        Amount: 10, //amount
        PartyA: "600123", //b2c shortcode
        PartyB: "254768793923", //receiving phone
        Remarks: "any remarks",
        QueueTimeOutURL: "https://mydomain.com/api/b2c/b2c-callback-handler", //route to time-out callback handler
        ResultURL: "https://mydomain.com/api/b2c/timeout-handler", //route to results callback handler
        Occassion: "", //any
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, //token from middleware before route
        },
      }
    );
    res.send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = initiateB2c;
