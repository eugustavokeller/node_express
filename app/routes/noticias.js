module.exports = (app) => {
  app.get("/noticias", (req, res) => {
    let connection = app.config.dbConnection();
    let noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, (error, result) => {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
