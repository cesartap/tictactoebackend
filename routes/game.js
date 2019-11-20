const router = require('express').Router();
let gamesModel = require('../models/game.model');

/**
 * Metodo para obtener todos los juegos generados
 */
router.route('/').get((req, res) => {
  gamesModel.find()
    .then(element => res.json(element))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * Metodo para agregar un juego
 */
router.route('/add').post((req, res) => {

  // se obtiene la informacion del servicio
  const username = req.body.username;

  const gamesService = new gamesModel({username});

  gamesService.save()
    .then(() => res.json('Juego agregado a BD'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;