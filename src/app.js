const express = require('express')
const app = express()
const cors = require('cors');

const database = require('./models/repository');
database.connect()

const router = require('./routes/gamesRoutes');

app.use(cors());
app.use(express.json())
app.use('/', router)

module.exports = app