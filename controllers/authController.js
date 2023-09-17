const authModel = require("../models/authModel");

module.exports = (req, res) => {
  authModel
    .auth(req.params.method, req.body.txtUser, req.body.txtPass)
    .then((code) => {
      res.send(code);
    });
};
