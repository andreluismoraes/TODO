const TODO = require('../model/todoModel')

module.exports ={
    
    async index(req, res){
        const todo = await TODO.find()
        return todo
    }
}