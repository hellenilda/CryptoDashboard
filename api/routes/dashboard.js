const express = require('express');
const router = express.Router();
const axios = require('axios');
const chave_api = process.env.CHAVE_API;

// Rota raíz
router.get('/', (req, res) => {
    res.send('Aplicação rodando');
});

// Rota para buscar dados de criptomoedas
router.get('/crypto', async (req, res) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`);
        res.send(response.data);
    } catch (error) {
        res.send('Erro ao buscar dados da API');
    }
});

module.exports = router;