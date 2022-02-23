const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'servidor ok'});
});

app.listen(3333);