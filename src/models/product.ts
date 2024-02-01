// const { db: dbproducts } = require("../db.js");
// const { DataTypes } = require("sequelize");
import db from "../db";
import { DataTypes } from "sequelize";

const ProductModel = db.define(
  "PRODUCTS",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
    },
    categoryID: {
      type: DataTypes.INTEGER,
    },
    productDescription: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    productImage: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "PRODUCTS",
    timestamps: false,
  }
);

export default ProductModel;
