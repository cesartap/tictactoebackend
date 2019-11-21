const router = require('express').Router();
let conditionsModel = require('../models/conditions.model');

/**
 * Metodo para obtener todos las reglas
 */
router.route('/all').get((req, res) => {
  conditionsModel.find()
    .then(element => res.json(element))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * Metodo para agregar un juego
 */
router.route('/add').post((req, res) => {

    // se borran las condiciones anteriores
    conditionsModel.remove({}, function (err) {
      console.log('CONDICIONES BORRADAS')
    });

    console.log(req.body);
    req.body.forEach(element => {
      console.log(element);

      // se obtiene la informacion del servicio
      const move = element.move;
      const kills = element.kills;

      const conditionsService = new conditionsModel({ move, kills });

      conditionsService.save()
        .then(() => console.log('Condicion actualizada'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
   
  
  res.json('Condiciones Actualizadas')
});


module.exports = router;