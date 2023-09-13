const authModel = require('../models/authModel')

module.exports = (req, res) => {
  auth = authModel.auth(req.params.method, req.body.txtUser, req.body.txtPass)
  res.send(auth)
};
