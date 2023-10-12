let express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("<html><body>Portal de Notícias</body></html>");
});

app.get('/tecnologia', (req, res) => {
    res.render('secao/tecnologia');
});

app.get('/moda', (req, res) => {
    res.render('secao/moda');
});

app.get('/beleza', (req, res) => {
    res.render('secao/beleza');
});

app.listen(3000, () => {
    console.log('Servidor rodando com Express');
});