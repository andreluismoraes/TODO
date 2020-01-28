const mongoose = require('mongoose')

const TODOSchema = new mongoose.Schema({
    tarefa: String,
    concluido: Boolean,
    data: Date
})

module.exports = mongoose.model('TODO', TODOSchema)