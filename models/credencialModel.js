const storageManager = require("handy-storage");
const fileReader = require("fs");
const path = require("path");
// const path = require("path");
const filePath = path.resolve(__dirname, "../data/users.json");
const storage = new storageManager({
  beautify: true,
});

storage.connect(filePath);

module.exports = {
  username: "",
  password: "",
  getUserCredentials: () => {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      const user = data.account;
      this.username = user.username;
      this.password = user.password;
    } catch (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
    }
  },
};
