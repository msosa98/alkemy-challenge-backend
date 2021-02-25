const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { httpError } = require("../helpers");

async function verifyToken(req, res, next) {
  try {
    const token = req.headers["authorization"];

    if (!token) return httpError(400, "Token must be sent");

    jwt.verify(token, JWT_SECRET, (error) => {
      if (error) return httpError(401, "Invalid token");
      next();
    });
  } catch (e) {
    res.status(e.status).json({
      error: e.message,
    });
  }
}

module.exports = verifyToken;
