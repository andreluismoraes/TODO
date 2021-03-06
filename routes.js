const {Router} = require('express')
const TODO = require('./controller/todoController')
const USER = require('./controller/userController')

routes = Router()

/**Rotas do todo */
routes.get('/todo', TODO.index)
routes.post('/todo', TODO.store)
routes.get('/notrealized', TODO.notrealized)
routes.get('/fordate', TODO.fordate)

/**Rotas do user */
routes.get('/user', USER.index)
routes.post('/user', USER.store)
routes.get('/userStreet', USER.findUserStreet)


module.exports = routes