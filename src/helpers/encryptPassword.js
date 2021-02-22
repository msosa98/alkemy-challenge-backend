const { hashSync, genSaltSync } = require("bcryptjs");

const encryptPassword = (password) => {
  return hashSync(password, genSaltSync(10));
};

module.exports = encryptPassword;
