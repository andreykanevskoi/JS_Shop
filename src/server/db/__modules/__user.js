const { DataTypes } = require('sequelize');
var sequelize = require('./__dbModel');

const User = sequelize.define('User', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    USER_PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'USER',
    timestamps: false
  }
)

module.exports = User;