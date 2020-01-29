const axios = require('axios')

module.exports = {
    async findStreet(findcep){
        const getCep = await axios.get(`https://viacep.com.br/ws/${findcep}/json/`)
        return getCep.data 
    }
}