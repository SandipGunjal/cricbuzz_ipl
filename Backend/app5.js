const mongoose = require('mongoose')
const express = require('express')
const app5 = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const odi_rank = require('./Api/Routes/odi_rank')

mongoose.connect('mongodb://localhost:27017/cricbuzz')
app5.use(bodyParser.json());
app5.use(cors());

app5.use('/odi',odi_rank)

module.exports = app5