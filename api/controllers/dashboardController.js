const axios = require('axios');

const chave_api = process.env.CHAVE_API;
const url = process.env.URL;

// Controlador para exibir a página inicial (index)
exports.index = (req, res) => {
    res.render('index');
};

// Controlador para buscar dados da API da CoinGecko
exports.getCryptoData = async (req, res) => {
    const crypto = req.query.crypto; // Obtém o nome da criptomoeda enviado no formulário

    if (!crypto) {
        return res.render('index', { error: 'Por favor, insira o nome de uma criptomoeda.' });
    }

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
        const cryptoData = response.data;

        if (!cryptoData[crypto]) {
            return res.render('index', { error: 'Criptomoeda não encontrada.' });
        }

        // Envia os dados da criptomoeda para o frontend
        res.render('index', {
            crypto: {
                name: crypto,
                symbol: 'USD',
                price_usd: cryptoData[crypto].usd
            }
        });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        res.render('index', { error: 'Erro ao buscar dados da API.' });
    }
};

// Controlador para exibir a página de favoritos
exports.favorites = (req, res) => {
    // Aqui não precisa fazer nada com favoritos, pois são carregados no lado do cliente
    res.render('favoritos');
};