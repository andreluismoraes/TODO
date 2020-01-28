const TODO = require('../model/todoModel')

module.exports ={
    
    //listando todas as todos
    async index(req, res){
        const todos = await TODO.find()
        return res.json(todos)
    },

    //criando ou atualizando uma todo como o mesmo nome
    //usando o findoneandupdate
    async store(req, res){
        const todos = await TODO.findOneAndUpdate(
            {tarefa: req.body.todo},
            {$set: {tarefa: req.body.todo, concluido: req.body.conclui, data: Date.now()}},
            {upsert: true, new: true}
        )
        return res.json(todos)
    }
}