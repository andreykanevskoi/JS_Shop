const { DataTypes } = require('sequelize');
var sequelize = require('./dbModel');

const CartToProduct = sequelize.define('CartToProduct', {
    CART_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'CART_TO_PRODUCT',
    timestamps: false
  }
)

module.exports = CartToProduct;