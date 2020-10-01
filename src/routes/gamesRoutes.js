const express = require('express')
const app = require('../app')
const router = express.Router()
const controller = require('../controllers/gamesController')

router.get('/jogos', controller.getGames)
router.get('/jogos/:id', controller.getGamesById)


module.exports = router