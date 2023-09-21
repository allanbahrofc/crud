const authModel = require("../models/authModel");
const credencialModel = require("../models/credencialModel");
module.exports = (req, res) => {
  authModel
    .auth(req.params.method, req.body.txtUser, req.body.txtPass)
    .then((code) => {
      switch (code) {
        // Registro
        case 201:
          res.redirect("/");
          break;
        case 404:
          res.send("Erro de Request");
          break;

        // Login
        case 202:
          res.redirect(`/c/${req.body.txtUser}`);
          break;

        case 204:
          res.redirect("/auth");
          break;

        case 401:
          res.redirect("/auth");
          break;

        default:
          res.sendStatus(code);
          break;
      }
    });
};
