const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const https = require('https')
const http = require('http')

const app = express();
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
            <br><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor mattis nunc, non luctus ex finibus ut. Praesent at maximus velit. Sed at sem quis ante viverra pellentesque. In dolor turpis, posuere vitae ultricies sed, vulputate eget metus. Suspendisse tincidunt, felis id dictum pharetra, nulla lectus ullamcorper erat, ac ornare sem sapien ut turpis. Donec elementum molestie ex, a tristique erat feugiat pulvinar. Vestibulum vitae imperdiet enim, eu venenatis magna. Nullam et nisl quis nibh vehicula varius.

            Morbi volutpat ultrices accumsan. Ut sed consectetur erat. Nunc suscipit tempor velit a congue. Quisque dolor turpis, auctor sed ornare ut, hendrerit non nisi. Nam fringilla laoreet orci, vitae dapibus lorem placerat suscipit. Duis posuere vulputate viverra. Integer scelerisque accumsan maximus. Nulla luctus nulla consectetur neque lobortis rhoncus.
            
            Aliquam suscipit egestas erat eget blandit. Aenean lacinia imperdiet consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce interdum maximus turpis. Aenean facilisis ipsum at ultrices dapibus. Nullam eget turpis ac purus fringilla efficitur. Etiam ut libero odio. Integer sit amet egestas magna, sed dapibus magna. Sed nec eleifend augue.
            
            <h2>Curabitur eget ultricies nunc. Etiam nec ultrices tortor. Integer dignissim ultrices elementum. Fusce suscipit finibus felis. Donec venenatis a mi non tincidunt. Proin mattis orci lacus. Morbi scelerisque mi eget diam finibus commodo. Ut a laoreet nisi, vel fringilla ante. Mauris nec facilisis eros. Integer egestas ornare suscipit. Nunc sodales fringilla dictum. Etiam auctor lacinia velit eget tristique. Phasellus venenatis nec quam et auctor. Donec scelerisque nisl et felis posuere placerat.<h2>
            
            <h3>Aenean aliquam efficitur nulla id interdum. Suspendisse lacus ipsum, commodo sit amet est eget, suscipit ultrices enim. Phasellus ac sem id felis volutpat hendrerit nec et nisl. Etiam at tortor dapibus, semper est non, consequat nunc. Nunc molestie nunc eu est congue finibus. Morbi at nisi placerat, pharetra velit sed, malesuada tellus. Praesent venenatis pharetra nulla ut suscipit. Sed mattis rhoncus lorem, non semper massa lobortis vitae. Duis risus libero, vestibulum eget tortor ut, tempor venenatis libero. Donec ullamcorper nisl quam, vitae venenatis justo luctus vel. Sed at ipsum blandit, ullamcorper dolor luctus, pulvinar nisi. Integer ut est ut lectus rutrum tempus vel id nunc. Duis quis arcu posuere arcu luctus feugiat. Morbi vel neque dui. Pellentesque sed elit id erat mollis ornare vel ut lorem.<h3>
            <br><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor mattis nunc, non luctus ex finibus ut. Praesent at maximus velit. Sed at sem quis ante viverra pellentesque. In dolor turpis, posuere vitae ultricies sed, vulputate eget metus. Suspendisse tincidunt, felis id dictum pharetra, nulla lectus ullamcorper erat, ac ornare sem sapien ut turpis. Donec elementum molestie ex, a tristique erat feugiat pulvinar. Vestibulum vitae imperdiet enim, eu venenatis magna. Nullam et nisl quis nibh vehicula varius.

            Morbi volutpat ultrices accumsan. Ut sed consectetur erat. Nunc suscipit tempor velit a congue. Quisque dolor turpis, auctor sed ornare ut, hendrerit non nisi. Nam fringilla laoreet orci, vitae dapibus lorem placerat suscipit. Duis posuere vulputate viverra. Integer scelerisque accumsan maximus. Nulla luctus nulla consectetur neque lobortis rhoncus.
            
            Aliquam suscipit egestas erat eget blandit. Aenean lacinia imperdiet consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce interdum maximus turpis. Aenean facilisis ipsum at ultrices dapibus. Nullam eget turpis ac purus fringilla efficitur. Etiam ut libero odio. Integer sit amet egestas magna, sed dapibus magna. Sed nec eleifend augue.
            
            <h2>Curabitur eget ultricies nunc. Etiam nec ultrices tortor. Integer dignissim ultrices elementum. Fusce suscipit finibus felis. Donec venenatis a mi non tincidunt. Proin mattis orci lacus. Morbi scelerisque mi eget diam finibus commodo. Ut a laoreet nisi, vel fringilla ante. Mauris nec facilisis eros. Integer egestas ornare suscipit. Nunc sodales fringilla dictum. Etiam auctor lacinia velit eget tristique. Phasellus venenatis nec quam et auctor. Donec scelerisque nisl et felis posuere placerat.<h2>
            
            <h3>Aenean aliquam efficitur nulla id interdum. Suspendisse lacus ipsum, commodo sit amet est eget, suscipit ultrices enim. Phasellus ac sem id felis volutpat hendrerit nec et nisl. Etiam at tortor dapibus, semper est non, consequat nunc. Nunc molestie nunc eu est congue finibus. Morbi at nisi placerat, pharetra velit sed, malesuada tellus. Praesent venenatis pharetra nulla ut suscipit. Sed mattis rhoncus lorem, non semper massa lobortis vitae. Duis risus libero, vestibulum eget tortor ut, tempor venenatis libero. Donec ullamcorper nisl quam, vitae venenatis justo luctus vel. Sed at ipsum blandit, ullamcorper dolor luctus, pulvinar nisi. Integer ut est ut lectus rutrum tempus vel id nunc. Duis quis arcu posuere arcu luctus feugiat. Morbi vel neque dui. Pellentesque sed elit id erat mollis ornare vel ut lorem.<h3>

        </center>`

    );
});

http.createServer(app).listen(80)
https.createServer(app).listen(443)