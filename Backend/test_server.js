require('dotenv').config()
const http = require('http')

const app6 = require('./app6')

const port = 9090
const host = process.env.host


const server = http.createServer(app6)

server.listen(port,()=>{
    console.log(`Server started as ${host}:${port} , Test_server`);
})
