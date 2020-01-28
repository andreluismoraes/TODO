const express = require('express')
const server = require("./originalServer")

//use this to conect to server
//const server = require("./server")

//to run the aplication 'npm run dev'
const app = express()

server.then(conection => conection.connect).catch(err => { message: err})

app.use(express.json())


//listen app on 3000 port

app.listen(3000, console.log('Server runing'))