const router = require('express').Router()
const path = require('path')

router.get('/', (req,res) => {
    res.sendFile(__dirname + "/views/index.html")    
})


module.exports = router