const router = require("express").Router();
const path = require('path')

// Rota para Visualização Geral
router.get("/c", (req, res) => {
  res.send("plataforma aqui.");
});

// Rotas para Manuseio de Registro do Produto
router.get("/c/gen", (req, res) => {
    res.send('criando produto')
});
router.post("/c/gen", (req, res) => {
    res.send('postando produto criando para plataforma')
});

// Rotas para Manuseio de Produto
router.get("/c/:productID/view", (req, res) => {
    res.send('visualizando' + req.params.productID)
});
router.get("/c/:productID/mod", (req, res) => {
    res.send('modificando' + req.params.productID)

});
router.get("/c/:productID/del", (req, res) => {
    res.send('deletando' + req.params.productID)
});

module.exports = router