const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const encryptPass = (req, res) => {
  const password = req.body.password;
  try {
    if (!password) {
      return res.status(400).json("provide required password");
    }
    const passwordBuffer = Buffer.from(password);
    const certPath = path.join(__dirname, "../../utils/b2cCert.cer");
    const certBuffer = fs.readFileSync(certPath);

    const publicKey = crypto.createPublicKey({
      key: certBuffer,
      format: "pem",
    });

    const encryptedBuffer = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      passwordBuffer
    );

    const securityCredential = encryptedBuffer.toString("base64");

    res.status(200).json({
      message: "Password encrypted successfully",
      securityCredential,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = encryptPass;
