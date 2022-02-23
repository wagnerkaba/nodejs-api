const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (request, response) => {

    const resposta = request.body;
    console.log(resposta);
    return response.send(`Olá ${resposta.nome}! Seja bem vindo! ${resposta.texto}`);
});

app.listen(3333);