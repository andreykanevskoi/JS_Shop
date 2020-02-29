const { DataTypes } = require('sequelize');
var sequelize = require('./__dbModel');

const Product = sequelize.define('Product', {
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PRODUCT_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'PRODUCT',
    timestamps: false
  }
)

module.exports = Product;