const mongoose = require('mongoose')

const server = mongoose.createConnection('mongodb+srv://<username>:<password>@server-dshxz.mongodb.net/todo?retryWrites=true&w=majority')

module.exports = server