const { DataTypes } = require('sequelize');
var sequelize = require('./__dbModel');
const User = require('./__user');

const Cart = sequelize.define('Cart', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CART_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    }
  }, {
    tableName: 'CART',
    timestamps: false
  }
)

module.exports = Cart;