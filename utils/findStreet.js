const axios = require('axios')

module.exports = {
    async findStreet(cep){
        const getCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return getCep
    }
}