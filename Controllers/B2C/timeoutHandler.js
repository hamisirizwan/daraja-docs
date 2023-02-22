const handleTimeOut = (req, res) => {
  console.log("-------B2C TIMEOUT -------");
  console.log(req.body);
  res.json("ok");
};

module.exports = handleTimeOut;
