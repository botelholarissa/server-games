const express = require('express')
const app = express()
const router = require('./routes/gamesRoutes')

// rotas
app.use('/', router)

module.exports = app