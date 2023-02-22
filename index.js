const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const B2C = require("./routes/b2c");
const STK = require("./routes/stk");
const port = process.env.PORT || 8080;

//required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("daraja docs page");
});

app.use("/api/b2c", B2C);
app.use("/api/stk", STK);
app.listen(port, () => console.log(`server up and running at port: ${port}`));
