const User = require('./user');
const Cart = require('./cart');
const Product = require('./product');
const CartToProduct = require('./cartToProduct');

User.hasOne(Cart, {
  foreignKey: 'USER_ID'
});
Cart.belongsTo(User);

Cart.hasMany(CartToProduct, {
  foreignKey: "CART_ID"
});
CartToProduct.belongsTo(Cart);

Product.hasMany(CartToProduct, {
  foreignKey: 'PRODUCT_ID'
});
CartToProduct.belongsTo(Product);
