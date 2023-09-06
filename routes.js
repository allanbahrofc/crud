const router = require("express").Router()
const path = require("path")
const bodyParser = require("body-parser")
const { randomInt } = require("crypto")

const generateKey = () => {
    let key = ''
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
    
    for(let i = 0; i<16; i++){
        key += letters[randomInt(letters.length)]
    }

    return key
}
var key = generateKey()

const userController = (usr, pwd) => {
  var status;
  if (usr == "admin" && pwd == "12345") status = 200;
  else {
    status = 404;
    
  }
  return status;
};

router.use(bodyParser.urlencoded({ extended: false }));
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.post("/auth", (req, res) => {
  state = userController(req.body.username, req.body.password);
  if(state == 200){
    res.redirect(`/${key}/c`)
  }else{
    res.redirect('/')
  }
});
router.get(`/${key}/c`, (req,res) => {
    res.send('Authorized')
})

module.exports = router;
