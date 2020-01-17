const routes = require('express').Router()
const PersonController = require('../controllers/PersonController')
const similarities = require('../middlewares/similarities')
const {getAge, getKeyword} = require('../middlewares/everylab')

routes.post('/', similarities, getAge, getKeyword, PersonController.create)
routes.get('/', PersonController.read)
routes.get('/:id', PersonController.readOne)

module.exports = routes