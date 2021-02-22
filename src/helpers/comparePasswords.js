const { compareSync } = require("bcryptjs");

const comparePasswords = (requestPasswod, validPassword) => {
  return compareSync(requestPasswod, validPassword);
};

module.exports = comparePasswords;
