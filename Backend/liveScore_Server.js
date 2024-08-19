require('dotenv').config()

const http = require('http')
const app1 = require('./app1')

const port = 5051
const host = process.env.host

const server = http.createServer(app1)

server.listen(port,()=>{
    console.log(`Server started as ${host}:${port} , LiveScore Server`);
})
