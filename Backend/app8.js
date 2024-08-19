const mongoose = require('mongoose')
const express = require('express')
const app8 = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userLogin = require('./Api/Routes/userLogin')

mongoose.connect('mongodb://localhost:27017/cricbuzz')
app8.use(bodyParser.json());
app8.use(cors());

app8.use('/', userLogin)

module.exports = app8