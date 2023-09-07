const router = require("express").Router();
const path = require("path");

router.get("/auth", (req, res) => {
  res.send("Visualizando autenticação");
});
router.post("/auth", (req, res) => {
  res.send("post realizado pela autenticação");
});

router.get("/auth/:key", (req, res) => {
  res.send(req.params.key);
});
router.post("/auth/:key", (req, res) => {
    res.send('postando a sessão para plataforma')
});

module.exports = router;
