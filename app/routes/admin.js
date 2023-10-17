module.exports = (app) => {
  app.get("/formulario_inclusao_noticia", (req, res) => {
    res.render("admin/form_add_noticia");
  });

  app.post("/noticias/salvar", (req, res) => {
    let noticia = req.body;

    let connection = app.config.dbConnection();
    let NoticiasDao = new app.app.models.NoticiasDAO(connection);

    NoticiasDao.salvarNoticia(noticia, (error, result) => {
      res.redirect("/noticias");
    });
  });
};
