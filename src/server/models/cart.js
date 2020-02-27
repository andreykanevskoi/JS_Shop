const { DataTypes } = require('sequelize');
var sequelize = require('./dbModel');

const Cart = sequelize.define('Cart', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    CART_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    tableName: 'CART',
    timestamps: false
  }
)

module.exports = Product;