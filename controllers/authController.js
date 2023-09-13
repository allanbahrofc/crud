const authModel = require('../models/authModel')

module.exports = (req, res) => {
  auth = authModel.auth(req.params.method)
  res.send(auth)
};
