const {Router} = require('express')
const TODO = require('./controller/todoController')

routes = Router()

routes.get('/todo', TODO.index)


module.exports = routes