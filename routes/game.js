const router = require('express').Router();
let gamesModel = require('../models/game.model');
var mongoose = require('mongoose');
/**
 * Metodo para obtener todos los juegos generados
 */
router.route('/findByName').post((req, res) => {
  gamesModel.find({
    nameP1: req.body.user
  }).select({})
    .then(element => res.json(element))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * Metodo para agregar un juego
 */
router.route('/add').post((req, res) => {

  // se obtiene la informacion del servicio
  const username = req.body.user;
  const gamesService = new gamesModel({ username });

  let variable;
  // se busca el usuario sino esta se guarda como nuevo
  gamesModel.find({
    nameP1: req.body.user
  })
    .then(
      (docs) => {

        if (0 != docs.length) {

          gamesModel.updateOne({ _id: docs[0]._id }, { $set: { gamesWon: docs[0].gamesWon + 1 } }, { multi: true, new: true })
            .then((docs) => {
              if (docs) {
                res.json('Condicion agregado a BD')
              } else {
              }
            }).catch((err) => {
              console.log(err);
            })

        } else {

          const gamesNewService = new gamesModel({ _id: mongoose.Types.ObjectId(), nameP1: req.body.user, gamesWon: 1 });
          gamesNewService.save()
            .then(() => res.json('Jugador nuevo agregado a BD'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
      }
    )
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;