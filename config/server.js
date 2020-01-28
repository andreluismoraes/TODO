const mongoose = require('mongoose')

const server = mongoose.connect('mongodb+srv://<username>:<password>@server-dshxz.mongodb.net/todo?retryWrites=true&w=majority')

module.exports = server