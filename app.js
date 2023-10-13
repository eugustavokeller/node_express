let app = require('./config/server');

let routeHome = require('./app/routes/home')(app);
let routeNoticias = require('./app/routes/noticias')(app);
let routeFormAddNoticia = require('./app/routes/form_add_noticia')(app);

app.listen(3000, () => {
    console.log('Servidor ON');
});