const router = require("express").Router()

const authRoutes = require('./routes/authRoutes')
const crudRoutes = require('./routes/crudRoutes')
const indexRoutes = require('./routes/indexRoutes')

router.use('/', indexRoutes)
router.use('/', authRoutes)
router.use('/', crudRoutes)

module.exports = router;
