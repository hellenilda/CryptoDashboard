require('dotenv').config();

const express = require('express')
const axios = require('axios')

const app = express()
const port = process.env.PORT
const chave_api = process.env.CHAVE_API

app.get('/', (req, res) => {
    res.send('Aplicação rodando')
})

app.get('/crypto', async (req, res) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`);
      res.send(response.data);
    } catch (error) {
      res.send('Erro ao buscar dados da API');
    }
});

app.listen(port, (req,res) => {
    console.log(`Rodando em http://localhost:${port}/`)
})