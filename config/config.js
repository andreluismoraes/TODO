const express = require('express')

//to run the aplication 'npm run dev'
const app = express()

app.use(express.json())

//listen app on 3000 port

app.listen(3000, console.log('Server runing'))