const express = require('express');
const router = express.Router();

//Controlador
const ordenController = require('../controllers/ordenController');

//Rutas
//locahost:3000/orden/

router.get('/', ordenController.get);

router.get('/:id', ordenController.getById);

module.exports = router;
