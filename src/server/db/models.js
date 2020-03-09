/*
    Файл        : server/db/models.js
    Автор       : Каневской Андрей 
    Описание    : Содержит описание моделей ORM, связанных с БД.
    
    2020г.
*/

const { DataTypes } = require('sequelize');
const sequelize = require('./db_model');

const Cart = sequelize.define(
  'Cart',
  {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CART_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  },
  {
    tableName: 'CART',
    timestamps: false
  }
);

const Product = sequelize.define(
  'Product',
  {
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_DESC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PRODUCT_NAME: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'PRODUCT',
    timestamps: false
  }
);

const User = sequelize.define(
  'User',
  {
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
  },
  {
    tableName: 'USER',
    timestamps: false
  }
);

const CartToProduct = sequelize.define(
  'CartToProduct',
  {
    CART_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cart,
        key: 'CART_ID'
      }
    },
    PRODUCT_AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'PRODUCT_ID'
      }
    }
  },
  {
    tableName: 'CART_TO_PRODUCT',
    timestamps: false
  }
);

User.hasOne(Cart, {
  foreignKey: {
    name: 'USER_ID'
  }
});
Cart.belongsTo(User, {
  foreignKey: {
    name: 'USER_ID'
  }
});

Cart.belongsToMany(Product, {
  through: 'CartToProduct',
  foreignKey: 'CART_ID'
});
Product.belongsToMany(Cart, {
  through: 'CartToProduct',
  foreignKey: 'PRODUCT_ID'
});

module.exports = { User, Cart, Product, CartToProduct, sequelize };
