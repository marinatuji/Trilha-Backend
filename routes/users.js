const router = require('express').Router();
const models = require('../app/models');
const User = models.User;

//findAll, findOne
router.get('/', (req, res) => {
  User.findAll()
    .then(user => {
      res.send(user);
    })
})

router.post('/', (req, res) =>
  User.create(req.body)
    .then(user => {
      res.status(201).send({ msg: 'Usuário criado com sucesso', user });
    })
    .catch((error) => {
      console.log('mensagem de erro:', error)
    })
)

router.put('/:id', (req, res) =>
  User.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      User
        .findOne({ where: { id: req.params.id } })
        .then(user => res.send(user.dataValues))
    })
)

router.get("/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => res.send(user));
})

//aula de hoje
router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
})

module.exports = router;