const { Sequelize } = require("sequelize");
const {
  database_name,
  database_user,
  database_password,
  database_host,
  database_dialect,
} = require("../config");

const db = new Sequelize(database_name, database_user, database_password, {
  host: database_host,
  dialect: database_dialect,
  logging: false,
});

module.exports = db;
