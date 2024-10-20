const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Rota para exibir a página inicial
router.get('/', (req, res) => {
    res.send('Aplicação rodando');
});

// Rota para buscar dados de criptomoedas
router.get('/crypto', dashboardController.getCryptoData);

module.exports = router;