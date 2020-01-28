const mongoose = require('mongoose')

const TODOSchema = mongoose.Schema({
    tarefa: String,
    concluido: Boolean,
    data: Date.now,
})

module.exports = mongoose.model('TODO', TODOSchema)