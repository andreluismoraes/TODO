const mongoose = require('mongoose')

const USERSchema = new mongoose.Schema({
    nomeUser: String,
    emailUser: String,
    senhaUser: String,
    //colocar api de cep como util função de cep para funcionar
    enderecoUser: new mongoose.Schema({
        cepUser: String,
        logradouroUser: String,
        complementoUser: String,
        bairroUser: String,
        localidadeUser: String,
        ufUser: String
    })
})

module.exports = mongoose.model('USER', USERSchema)