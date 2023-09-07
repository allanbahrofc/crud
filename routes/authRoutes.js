const router = require("express").Router();

router.get("/auth", (req, res) => {});

router.post("/auth", (req, res) => {});

router.get("/auth/:key", (req, res) => {
    console.log(req.params.key)
});
