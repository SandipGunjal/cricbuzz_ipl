const mongoose = require('mongoose')
const express = require('express')
const app6 = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const test_rank = require('./Api/Routes/test_rank')

mongoose.connect('mongodb://localhost:27017/cricbuzz')
app6.use(bodyParser.json());
app6.use(cors());

app6.use('/test',test_rank)

module.exports = app6