
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

nunjucks configure('views'  {
    autoescape: true,
    express: app
});

app.get('/', function (req, res)  {
    res.sendFile(__dirname + '/index.html');
    let name = 'Evelyn Eichenberg';
    res.render('index.njk')
})

app.listen(3000)
console.log('server started on http://localhost:3000')