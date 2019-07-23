const router = require('express').Router();
const models = require('../app/models');
const Order = models.Order;
const OrderProduct = models.OrderProduct;

router.get('/', (req, res) => {
  Order.findAll().then(orders => { res.send(orders) })
    .catch
})

router.post('/', (req, res) => {
  const { products, ...data } = req.body;
  Order.create(data)
    .then(order => {
      products.map(product => OrderProduct.create({ ProductId: product, OrderId: order.id }))
      res.status(201).send(order);
    })
    .catch((error) => {
      console.log('mensagem de erro', error)
    })
})

router.put('/:id', (req, res) => {
  Order.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Order
        .findOne({ where: { id: req.params.id } })
        .then(order => res.send(order.dataValues))
    })
})

router.get("/:id", (req, res) => {
  Order.findOne({ where: { id: req.params.id } })
    .then((order) => res.send(order));
})

router.delete('/:id', (req, res) => {
  Order.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
})

module.exports = router;