const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app1 = express()
const LiveScore_router = require('./Api/Routes/liveScore')
const { default: mongoose } = require('mongoose')

mongoose.connect('mongodb://localhost:27017/cricbuzz')
app1.use(bodyParser.json());
app1.use(cors());

app1.use('/livescores',LiveScore_router)

module.exports = app1

