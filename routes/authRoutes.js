const router = require("express").Router();
const path = require("path");
const authController = require("../controllers/authController");
router.get("/auth", (req, res) => {
  res.sendFile(path.resolve(path.dirname('../') + '/views/auth.html'))
});
router.post("/auth", authController);

router.post("/auth/signup/:accUser", (req, res) => {
  res.send(`registrando em ${req.params.accUser}`).status(200);
});
router.post("/auth/signin/:accUser", (req, res) => {
  res.send(`logando em ${req.params.accUser}`).status(200);
});

module.exports = router;
