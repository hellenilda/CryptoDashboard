const axios = require('axios');

const chave_api = process.env.CHAVE_API;
const url = process.env.URL || `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`;

async function getCryptoData(req, res) {
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${chave_api}`
            }
        });

        // Enviando os dados recebidos da API para o cliente
        res.json(response.data);
    } catch (error) {
        // Tratamento de erro se a API não responder
        console.error('Erro ao buscar dados da API:', error.message);
        res.status(500).json({ error: 'Erro ao buscar dados da API' });
    }
}

module.exports = { getCryptoData };