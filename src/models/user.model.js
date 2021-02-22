const { DataTypes } = require("sequelize");
const db = require("../database");

const UserModel = db.define(
  "users",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserModel;
