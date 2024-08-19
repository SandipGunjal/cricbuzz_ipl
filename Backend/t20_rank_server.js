require('dotenv').config()

const http = require('http')
const app = require('./app')
const app4 = require('./app4')

const port = 4500
const host = process.env.host


const server = http.createServer(app4)

server.listen(port,()=>{
    console.log(`Server started as ${host}:${port} , T20_Rank Server`);
})
