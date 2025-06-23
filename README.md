# Crypto Dashboard

Consumo da CoinGecko API com Node.JS

---

## Sumário
1. [Tecnologias utilizadas](#tecnologias-utilizadas)
2. [Funcionalidades](#funcionalidades)
3. [Estrutura do projeto](#estrutura-do-projeto)
4. [Como utilizar a aplicação](#como-utilizar-a-aplicação)

---

## Tecnologias utilizadas

- **Node.js** - Runtime JavaScript para o servidor
- **Express.js** - Framework web para Node.js
- **Handlebars** - Template engine para renderização das páginas
- **Axios** - Cliente HTTP para consumo da API
- **Bootstrap** - Framework CSS para estilização
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **CoinGecko API** - API para dados de criptomoedas
- **Nodemon** - Ferramenta para desenvolvimento (auto-restart)

---

## Funcionalidades

- **Consulta de preços em tempo real**: Busque o preço atual de qualquer criptomoeda
- **Interface intuitiva**: Design responsivo com Bootstrap para uma experiência agradável
- **Pesquisa por nome**: Digite o nome da criptomoeda (ex: bitcoin, ethereum) para obter informações
- **Exibição de preços em USD**: Visualize os valores em dólares americanos
- **Tratamento de erros**: Mensagens informativas para criptomoedas não encontradas
- **Página de favoritos**: Seção dedicada para suas criptomoedas preferidas
- **Arquitetura MVC**: Organização clara do código seguindo o padrão Model-View-Controller

---

## Estrutura do projeto
```bash
api/
│
├── controllers/
│   └── dashboardController.js       # Controlador para gerenciar as requisições da API
│
├── public/
│   └── img/
│   │   └── img-crypto.png
│   │   └── img-pesquisar.png
│   └── style/
│       └── style.css
│
├── routes/
│   └── dashboard.js                 # Rotas para a aplicação
│
├── views/
│   ├── layouts/
│   │   └── main.handlebars       # Layout principal com o template Handlebars
│   ├── style/
│   │   └── style.css
│   └── index.handlebars           # Página principal com o formulário de pesquisa
│   └── favoritos.handlebars
│   └── crypto.handlebars
│
├── .env                          # Arquivo de variáveis de ambiente (não incluído no repositório)
├── app.js                        # Configuração e inicialização do servidor
└── package.json                  # Dependências do projeto
```

---

## Como utilizar a aplicação

### Clonar o repositório
```bash
git clone https://github.com/hellenilda/CryptoDashboard.git
```

### Instalar as dependências
```bash
cd api/
npm install
```

### Configurar o dotenv
1. Crie um arquivo `.env` dentro de `api/`
2. Adicione as seguintes informações ao seu `.env`:
```bash
PORT=PORTA_DA_APLICACAO
CHAVE_API=SUA_CHAVE_API
URL=URL_DA_API
```

### Executar a aplicação
- Para executar a aplicação, basta executar os seguintes comandos:
```bash
cd api/
nodemon app.js
```

ou

```bash
cd api/
npm start
```