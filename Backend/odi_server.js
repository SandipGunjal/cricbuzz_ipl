require('dotenv').config()
const http = require('http')
const app5 = require('./app5')

const port = 6060
const host = process.env.host

const server = http.createServer(app5)

server.listen(port,()=>{
    console.log(`Server started as ${host}:${port} , Odi_Server`);
})
