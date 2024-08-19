const mongoose = require('mongoose')
const http = require('http');
const app3 = require('./app3');
require('dotenv').config()

const PORT = 7045;
const host = process.env.host

const server = http.createServer(app3)

server.listen(PORT,()=>{
    console.log(`Server stared in ${host}:${PORT} , POintTAble Server`);
})