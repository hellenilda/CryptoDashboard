require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const dashboardRouter = require('./routes/dashboard');
const path = require('path');

// Configurando o Handlebars como template engine
app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsing de dados de formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usando o router para definir rotas da aplicação
app.use('/', dashboardRouter);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}/`);
});