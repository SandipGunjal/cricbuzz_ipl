require('dotenv').config()
const http = require('http')
const app8 = require('./app8')


const port = 2000
const host = process.env.host
const server = http.createServer(app8)

server.listen(port,()=>{
    console.log(`Server started as ${host}:${port} , UserLogin` );
})
