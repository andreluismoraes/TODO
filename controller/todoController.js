const TODO = require('../model/todoModel')
const convertindData = require('../utils/convertindData')

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
            //search
            {tarefa: req.body.todo},
            //update or create
            {$set: {tarefa: req.body.todo, concluido: req.body.conclui, data: convertindData}},
            //enable upsert to true, and retur new: true
            {upsert: true, new: true}
        )
        return res.json(todos)
    },

    //achando as tarefas que não foram realizadas
    async notrealized(req, res){
        const todos = await TODO.find(
            {concluido: false}
        )
        return res.json(todos)
    },

    async fordate(req, res){
        const todos = await TODO.find(
            {data: req.query.date}
        )
        return res.json(todos)
    }
}