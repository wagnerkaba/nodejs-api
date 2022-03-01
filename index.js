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
        `<center font>
            <h1>Olá ${resposta.nome}!</h1> 
            Seja bem vindo! 
            <br>${resposta.texto}


        </center>`

    );
});

app.listen(80, function () {
    console.log('Example app listening on port 80!');
  });