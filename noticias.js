

let server = http.createServer(function(req, res) {

    console.log('Recebendo a requisição', req.url);
    let categoria = req.url;
    if (categoria == '/tecnologia') {
        res.end("<html><body>Notícias de tecnologia</body></html>");
    } else if (categoria == '/moda') {
        res.end("<html><body>Notícias de moda</body></html>");
    } else if (categoria == '/beleza') {
        res.end("<html><body>Notícias de beleza</body></html>");
    } else {
        res.end("<html><body>Portal de Notícias</body></html>");
    }

}
);

server.listen(3000);