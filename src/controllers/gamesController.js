const gamesSchema = require('../models/gamesSchema');

const getGames = (request, response) => {
    console.log(request.url);
    gamesSchema.gamesCollection.find((error, game) => {
        if(error){
            return response.status(500).send(error);
        } else {
            return response.status(200).send(game);
        }
    })
}

const getGameById = (request, response) => {
    const idParam = request.params.id
    gamesSchema.gamesCollection.findById(idParam, (error, game) =>{
        if(error){
            return response.status(500).send(error);
        } else {
            if(game){
                return response.status(200).send(game);
            } else {
                return response.status(404).send("Game not found! Please try again.");
            }
        }
    })
}

const addGame = (request, response) => {
    console.log(request.url);
    const gameBody = request.body;
    const game = new gamesSchema.gamesCollection(gameBody);

    game.save((error) => {
        if(error){
            return response.status(400).send(error);
        } else {
            return response.status(201).send(game)
        }
    })
}

//alterar update
const updateGame = (request, response) => { 
    const idParam = request.params.id;
    const gameBody = request.body;
    const novo = {new: true};

    gamesSchema.gamesCollection.findByIdAndUpdate(
        idParam,
        gameBody,
        novo,
        (error, game) => {
            if(error){
                return response.status(500).send(error);
            } else if (game) {
                return response.status(200).send(game);
            } else {
                return response.sendStatus(404);
            }
        }
    )
} 

const deleteGame = (request, response) => {
    const idParam = request.params.id;
    gamesSchema.gamesCollection.findByIdAndDelete(idParam, (error, game) => {
        if(error){
            return response.status(500).send(error);
        } else {
            if(game){
                return response.status(200).send("Game deleted.");
            } else {
                return response.sendStatus(404);
            }
        }
    })
}

module.exports = {
    getGames,
    getGameById,
    addGame,
    updateGame,
    deleteGame
}