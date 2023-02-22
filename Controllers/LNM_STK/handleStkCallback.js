const whiteListedIps = require("../../utils/whitelistedIps");

const handleStkCallback = (req, res) => {
  //check the ip where request is comming from, i have a file with all provide safaricom ips that the callback will come from
  const ipAddress = req.connection.remoteAddress;

  if (!whiteListedIps.includes(ipAddress)) {
    return res.status(401).json("Forbidden");
  }

  //check for failed/incomplet transactions
  if (!req.body.Body.stkCallback.CallbackMetadata) {
    console.log(req.body.Body.stkCallback.ResultDesc);
    res.status(200).json("ok");
    return;
  }

  //handle successfull payment
  const data = req.body.Body.stkCallback.CallbackMetadata;

  const phone = data.Item[4].Value;
  const mpesa_trx_code = data.Item[1].Value;
  const amount = data.Item[0].Value;

  console.log({ amount, phone, mpesa_trx_code });

  res.status(200).json("ok");
};

module.exports = handleStkCallback;
