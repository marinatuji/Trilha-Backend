'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product: DataTypes.STRING,
    price: DataTypes.FLOAT,
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.OrderProduct);
  };
  return Product;
};