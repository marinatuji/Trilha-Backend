const router = require('express').Router();
const models = require('../app/models');
const Order = models.Order;

router.get('/orders/:id', (req,res) => {
  Order.findAll().then(orders => {res.send(orders)})
  .catch
})

router.post('/', (req, res) =>
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch((error) => {
      console.log('mensagem de erro', error)
    })
)

router.put('/:id', (req, res) => User.update({ ...req.body }, { where: { id: req.params.id } })
  .then(() => {
    User
      .findOne({ where: { id: req.params.id } })
      .then(user => res.send(user.dataValues))
      .then(userId.send(userId, dataValues));
  })
)

router.get("/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => res.send(user));
})

router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
})

module.exports = router;