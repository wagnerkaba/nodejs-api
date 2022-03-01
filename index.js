const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    return response.send("Servidor está ok");
});

app.post('/', (request, response) => {

    const resposta = request.body;
    console.log(resposta);
    return response.send(
        `      
        <!DOCTYPE html>
        <html lang="pt-br">
        
        <head>
            <meta charset="utf-8">
            <title>Resposta Backend</title>
        </head>
        
        <body>
            <main class="main-cadastro">
                <h1 class="titulo">Olá ${resposta.nome}!</h1>
                <p>Muito obrigado por preencher o cadastro!</p>¨
                <p>Aqui estão os dados que você digitou:</p>
        
                <p>Email: ${resposta.email}</p>
                <p>Telefone: ${resposta.telefone}</p>
                <p>Senha: ${resposta.senha}</p>
            </main>
        </body>
        </html>
        `

    );
});

app.listen(3333, function () {
    console.log('App funcionando na porta 3333!');
});