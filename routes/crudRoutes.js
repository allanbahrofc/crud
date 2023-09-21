let user;
const path = require("path");
const router = require("express").Router();
const credencialModel = require("../models/credencialModel");

credencialModel.getUserCredentials().then((data) => {
  user = data.username;
});

// Rota para Visualização Geral
router.get("/c/:user/", (req, res) => {
  if (user == req.params.user) {
    res.send(`Logado como: ${req.params.user}`);
  } else {
    res.redirect("/");
  }
});

// Rotas para Manuseio de Registro do Produto
router.get("/c/:user/gen", (req, res) => {
  if (user == req.params.user) {
    res.send("criando produto");
  } else {
    res.redirect("/");
  }
});
router.post("/c/:user/gen", (req, res) => {
  if (user == req.params.user) {
    res.send("gerando produto");
  } else {
    res.redirect("/");
  }
});

// Rotas para Manuseio de Produto
router.get("/c/:user/:productID/view", (req, res) => {
  if (user == req.params.user) {
    res.send("visualizando" + req.params.productID);
  } else {
    res.redirect("/");
  }
});
router.get("/c/:user/:productID/mod", (req, res) => {
  if (user == req.params.user) {
    res.send("modificando" + req.params.productID);
  } else {
    res.redirect("/");
  }
});
router.get("/c/:user/:productID/del", (req, res) => {
  if (user == req.params.user) {
    res.send("deletando" + req.params.productID);
  } else {
    res.redirect("/");
  }
});

module.exports = router;
