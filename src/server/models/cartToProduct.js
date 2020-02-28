const { DataTypes } = require('sequelize');
var sequelize = require('./dbModel');
const Cart = require('./cart');
const Product = require('./product');

const CartToProduct = sequelize.define('CartToProduct', {
    CART_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cart,
        key: `CART_ID`
      }
    },
    PRODUCT_AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: `PRODUCT_ID`
      }
    }
  }, {
    tableName: 'CART_TO_PRODUCT',
    timestamps: false
  }
)

module.exports = CartToProduct;