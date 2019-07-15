'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    name: DataTypes.STRING,
    orderId: DataTypes.INTEGER
  }, {});
  OrderProduct.associate = function(models) {
    // associations can be defined here
    OrderProduct.belongsTo(models.Product, {foreignKey: 'productId'});
    OrderProduct.belongsTo(models.Order, {foreignKey: 'orderId'})
  };
  return OrderProduct;
};