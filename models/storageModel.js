const storageManager = require("handy-storage");
const fileReader = require("fs");
const { json } = require("body-parser");

const storage = new storageManager({
  beautify: true,
});

storage.connect("../data/users.json");

const setUserCredencial = (user, pass) => {
  storage.setState({
    user: {
      username: user,
      password: pass,
    },
  });
};
const getUserCredencial = () => {
  fileReader.readFile("../data/users.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      jsonFile = JSON.parse(data);
      return jsonFile.user;
    }
  });
};
(module.exports = setUserCredencial), getUserCredencial;
