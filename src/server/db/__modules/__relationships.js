const User = require('./__user');
const Cart = require('./__cart');
const Product = require('./__product');
const CartToProduct = require('./__cartToProduct');

User.hasOne(Cart, {
  foreignKey: {
    name: "USER_ID"
  }
});
Cart.belongsTo(User, {
  foreignKey: {
    name: "USER_ID"
  }
});

Cart.belongsToMany(Product, {through: 'CartToProduct', foreignKey: 'CART_ID'});
Product.belongsToMany(Cart, {through: 'CartToProduct', foreignKey: 'PRODUCT_ID'});

Cart.findAll({
  include: Product
}).then((Carts) => {console.log(JSON.stringify(Carts))});

