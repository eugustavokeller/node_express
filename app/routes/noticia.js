module.exports = (app) => {
    app.get("/noticia", (req, res) => {
  
      let connection = app.config.dbConnection();
  
      connection.query("select * from noticias where id_noticia = 2", (error, result) => {
        console.log(result[0].id_noticia);
          res.render("noticias/noticia", { noticia: result });
      });
    });
  };
  