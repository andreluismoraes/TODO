const {Router} = require('express')
const TODO = require('./controller/todoController')

routes = Router()

routes.get('/todo', TODO.index)
routes.post('/todo', TODO.store)
routes.get('/notrealized', TODO.notrealized)
routes.get('/fordate', TODO.fordate)


module.exports = routes