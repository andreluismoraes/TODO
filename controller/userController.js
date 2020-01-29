const USER = require('../model/userModel')
const getCep = require('../utils/findStreet')

/**     
 *      const getcep = await cep.findStreet(13972015)
        console.log(getcep)
*/

module.exports = {
    /**listando todos os usuarios */
    async index(req, res){
        const user = await USER.find()
        return res.json(user)
    },

    /** salvando um usuario com findOneAndUpdate*/
    async store(req, res){
        const { nome, email, senha, endereco} = req.body
        const {cep, logradouro, complemento, bairro, localidade, uf} = await getCep.findStreet(endereco)

        const user = await USER.findOneAndUpdate(
            //search
            {nomeUser: req.body.nome},
            //update or create
            {$set: {nomeUser: nome, 
                    emailUser: email, 
                    senhaUser: senha, 
                    enderecoUser: {cepUser: cep, 
                                    logradouroUser: logradouro, 
                                    complementoUser: complemento, 
                                    bairroUser: bairro, 
                                    localidadeUser: localidade, 
                                    ufUser: uf
                                }
                    }
            },
            //habilitanto e retornando com upsert e new = true
            {upsert: true, new: true}
        )
        return res.json(user)
    },

    async findUserStreet(req, res){
        const selectJustStreet = await USER.find({}).select('enderecoUser')
        const userStreet = await selectJustStreet.filter(data => data.enderecoUser.localidadeUser === req.query.endereco)
        
        return res.json(userStreet)
    },

}

/** nomeUser: String,
    emailUser: String,
    senhaUser: String, */

/**enderecoUser: new mongoose.Schema({
        cep: String,
        logradouro: String,
        complemento: String,
        bairro: String,
        localidade: String,
        uf: String
    }) */    