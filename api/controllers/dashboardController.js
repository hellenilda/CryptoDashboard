const axios = require('axios');

const chave_api = process.env.CHAVE_API;
const url = process.env.URL;

const response = await fetch(url);