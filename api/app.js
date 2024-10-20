const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const dashboardRouter = require('./routes/dashboard');

// Configurando o Handlebars como template engine
app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

// Usando o router para definir rotas da aplicação
app.use('/', dashboardRouter);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}/`);
});