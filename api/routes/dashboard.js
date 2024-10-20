const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Rota para a página inicial
router.get('/', dashboardController.index);

// Rota para buscar dados de criptomoedas
router.get('/crypto', dashboardController.getCryptoData);

module.exports = router;