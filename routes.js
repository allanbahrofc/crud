const router = require("express").Router()

const authRoutes = require('./routes/authRoutes')
const crudRoutes = require('./routes/crudRoutes')

router.use('/', authRoutes)
router.use('/', crudRoutes)

module.exports = router;
