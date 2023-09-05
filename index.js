const expressSession = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const routes = require("indexRoutes");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "uchweo8rh38hr09ehf",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.static(path.join(__dirname + "/public")));
app.use(routes)

app.listen(8080, () => {
  console.log("working fine");
});
