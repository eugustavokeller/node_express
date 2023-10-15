let mysql = require("mysql");

let conMySQL = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "portal_noticias",
  });
};

module.exports = () => {
  return conMySQL;
};
