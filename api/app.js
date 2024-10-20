const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Aplicação rodando')
})

app.listen(port, (req,res) => {
    console.log(`Rodando na porta ${port}`)
})