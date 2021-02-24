const { DataTypes } = require("sequelize");
const db = require("../database");

const CategoryModel = db.define(
  "Categories",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(25),
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = CategoryModel;
