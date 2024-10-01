const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const Router_players = require('./Api/Routes/players')
const LiveScore_router = require('./Api/Routes/liveScore')
const pointTable = require('./Api/Routes/pointTable')
const t20_rank = require('./Api/Routes/t20_rank')
const odi_rank = require('./Api/Routes/odi_rank')
const test_rank = require('./Api/Routes/test_rank')
const matches = require('./Api/Routes/matches')
const userLogin = require('./Api/Routes/userLogin')

const { default: mongoose } = require('mongoose')

const db = 'mongodb+srv://sandipgunjal:xPO8gY6N0MaQz5g2@cluster0.kgz5pfu.mongodb.net/cricbuzzweb?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(db).then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));
// uri = 'mongodb+srv://sandipgunjal:qZR3MB4KFBZr4zsp@cluster0.kgz5pfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// mongoose.connect('mongodb+srv://sandipgunjal:ryIPnFeokAEM94xu@cluster0.kgz5pfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// app.use(cors())
app.use(cors(
    {
        origin : 'http://localhost:4200'
    }
))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.use('/players',Router_players)
app.use('/livescores',LiveScore_router)
app.use('/pointtable' , pointTable)
app.use('/t20',t20_rank)
app.use('/odi',odi_rank)
app.use('/test',test_rank)
app.use('/matches',matches)
app.use('/', userLogin)

module.exports = app

