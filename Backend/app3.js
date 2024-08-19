const mongoose = require('mongoose')
const express = require('express')
const app3 = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const pointTable = require('./Api/Routes/pointTable')

mongoose.connect('mongodb://localhost:27017/cricbuzz')
app3.use(bodyParser.json());
app3.use(cors());

app3.use('/pointtable' , pointTable)

module.exports = app3