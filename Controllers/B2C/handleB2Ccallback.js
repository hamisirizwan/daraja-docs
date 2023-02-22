const whiteListedIps = require("../../utils/whitelistedIps");

const handleCallback = (req, res) => {
  //safaricom sends a post request with data of the transaction wheather completed or not

  //be carefull on how to handle this to avoid any security and miscalculations when saving transaction to db

  //STEPS
  // STEP 1 (optional)
  //check the ip where request is comming from, i have a file with all provide safaricom ips that the callback will come from
  const ipAddress = req.connection.remoteAddress;

  if (!whiteListedIps.includes(ipAddress)) {
    return res.status(401).json("Forbidden");
  }

  //STEP 2
  //check for completed transaction
  if (!req.body.Result.ResultParameters) {
    //this block will handle failed transactions
    console.log("-------------------- B2C Result -----------------");
    console.log(req.body.Result);
  }

  //successfull transaction to be saved
  const callbackData = req.body.Result.ResultParameters.ResultParameter;
  console.log(callbackData);
  res.json("ok");
};

module.exports = handleCallback;
