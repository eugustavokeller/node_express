module.exports = (app) => {
  app.get("/noticias", (req, res) => {
    let connection = app.config.dbConnection();

    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((error, result) => {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
