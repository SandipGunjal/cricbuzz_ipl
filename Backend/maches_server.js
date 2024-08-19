require('dotenv').config()

const http = require('http')
const app7 = require('./app7')

const port = 5052
const host = process.env.host

const server = http.createServer(app7)

server.listen(port,()=>{
    console.log(`Server started as ${host}:${port} , Matches Server`);
})
