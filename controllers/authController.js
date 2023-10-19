const authModel = require("../models/authModel");
const path = require("path")
const credencialModel = require("../models/credencialModel");
module.exports = (req, res) => {
  authModel
    .auth(req.params.method, req.body.txtUser, req.body.txtPass)
    .then((code) => {
      switch (code) {
        // Registro
        case 201:
          res.sendFile(path.resolve(path.dirname("../") + "/views/201.html"));
          break;
        case 404:
          res.send("Erro de Request");
          break;

        // Login
        case 202:
          res.redirect(`/c/${req.body.txtUser}`);
          break;

        case 204:
          res.sendFile(path.resolve(path.dirname("../") + "/views/404.html"));
          break;

        case 401:
          res.sendFile(path.resolve(path.dirname("../") + "/views/404.html"));
          break;

        default:
          res.sendStatus(code);
          break;
      }
    });
};
