const mongoose = require('mongoose')
const express = require('express')
const app7 = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const matches = require('./Api/Routes/matches')

mongoose.connect('mongodb://localhost:27017/cricbuzz')
app7.use(bodyParser.json());
app7.use(cors());

app7.use('/matches',matches)

module.exports = app7