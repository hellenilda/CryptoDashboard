const axios = require('axios');

// Controlador para buscar dados da API da CoinGecko
exports.getCryptoData = async (req, res) => {
    const crypto = req.query.crypto;  // O parâmetro vem do query string

    if (!crypto) {
        return res.redirect('/?error=Por favor, insira o nome de uma criptomoeda.');
    }

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto.toLowerCase()}&vs_currencies=usd`);
        const cryptoData = response.data;

        if (!cryptoData || Object.keys(cryptoData).length === 0) {
            return res.redirect('/?error=Criptomoeda não encontrada. Verifique o nome e tente novamente.');
        }

        const cryptoKey = Object.keys(cryptoData)[0];
        if (!cryptoData[cryptoKey] || !cryptoData[cryptoKey].usd) {
            return res.redirect('/?error=Dados da criptomoeda não disponíveis.');
        }

        // Renderiza o template 'crypto' com os dados da criptomoeda
        res.render('crypto', {
            title: 'Crypto Dashboard',
            crypto: {
                name: cryptoKey,
                price_usd: cryptoData[cryptoKey].usd
            }
        });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        res.redirect('/?error=Erro ao buscar dados da API.');
    }
};

// Controlador para exibir a página de favoritos
exports.favorites = (req, res) => {
    res.render('favoritos');
};

exports.index = (req, res) => {
    const error = req.query.error; // Captura a mensagem de erro, se houver
    res.render('index', { error });
};