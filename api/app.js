require('dotenv').config();

const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

// Arquivo de rotas da aplicação
const dashboardRouter = require('./routes/dashboard');

// Configurando o Handlebars como template engine
app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

// Usando o router para definir rotas da aplicação
app.use('/', dashboardRouter);

// Inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});