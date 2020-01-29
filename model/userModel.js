const mongoose = require('mongoose')

const USERSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    //colocar api de cep como util função de cep para funcionar
    endereco: new mongoose.Schema({
        cep: String,
        logradouro: String,
        complemento: String,
        bairro: String,
        localidade: String,
        uf: String
    })
})

module.exports = mongoose.model('USER', USERSchema)