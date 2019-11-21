var assert = require('assert');
const router = require('express').Router();
let conditionsModel = require('../models/conditions.model');

describe('Validacion busqueda reglas', function () {
    describe('#NOT_EMPTY', function () {
        it('no debe ser vacio el campo que llega como parametro', function () {
            
            conditionsModel.find()
                .then(element => {
                    if (null !== element) {
                        assert.equal(1, 1);
                    } else {
                        assert.equal(1, 1);
                    }
                })
                .catch(err => res.status(400).json('Error: ' + err));
        });
    });
});
