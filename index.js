const expressSession = require("express-session")
const bodyParser = require("body-parser")
const express = require("express")
const routes = require("./routes")
const path = require("path")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "uchweo8rh38hr09ehf",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static(path.join(__dirname + "/public")));
app.use('/', routes)
app.listen(port, () => {
  console.log(`Running in port: ${port}`);
});
