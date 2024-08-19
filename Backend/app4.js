const mongoose = require('mongoose')
const express = require('express')
const app4 = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const t20_rank = require('./Api/Routes/t20_rank')

mongoose.connect('mongodb://localhost:27017/cricbuzz')
app4.use(bodyParser.json());
app4.use(cors());

app4.use('/t20',t20_rank)

module.exports = app4