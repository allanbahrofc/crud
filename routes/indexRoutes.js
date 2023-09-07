const router = require("express").Router();
const path = require('path')

router.get("/", (req, res) => {
    res.sendFile(path.resolve(path.dirname('../') + '/views/index.html'))
});

module.exports = router