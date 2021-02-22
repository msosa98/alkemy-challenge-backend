const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");

const generateToken = (payload) => {
  return jwt.sign({ id: payload }, jwt_secret, { expiresIn: "4h" });
};

module.exports = generateToken;
