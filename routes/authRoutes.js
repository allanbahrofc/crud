const router = require("express").Router();
const path = require("path");
const authController = require("../controllers/authController");
router.get("/auth", (req, res) => {
  res.sendFile(path.resolve(path.dirname('../') + '/views/auth.html'))
});

router.post("/auth/:method/", authController);

module.exports = router;
