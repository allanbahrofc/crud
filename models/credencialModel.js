const storageManager = require("handy-storage");
const fileReader = require("fs");
const path = require("path");

const storage = new storageManager({
  beautify: true,
});

storage.connect("../data/users.json");

const setUserCredencial = (user, pass) => {
  storage.setState({
    account: {
      username: user,
      password: pass,
    },
  });
};
var getUserCredencial = () => {
  let credencialUser;
  fileReader.readFile("../data/users.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      JSON.parse(data);
      return credencialUser;
    }
  });
  return credencialUser;
};
// Remodelar isso TODO
const cr = getUserCredencial();
console.log(cr);
