const storageManager = require("handy-storage");
const fileReader = require("fs");
const path = require("path");
// const path = require("path");

const storage = new storageManager({
  beautify: true,
});

storage.connect(path.resolve(path.dirname("../") + "/data/users.json"));

module.exports = {
  username: "",
  password: "",
  getUserCredencial: () => {
    fileReader.readFile(
      path.resolve(path.dirname("../") + "/data/users.json"),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          data = JSON.parse(data).account;  
          this.username = data.username;
          this.password = data.password;
        }
      }
    );
  },
};
