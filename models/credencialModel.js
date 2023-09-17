const storageManager = require("handy-storage");
const fileReader = require("fs").promises;
const path = require("path");
const filePath = path.resolve(__dirname, "../data/users.json");

const storage = new storageManager({
  beautify: true,
});

storage.connect(filePath);

module.exports = {
  getUserCredentials: async () => {
    try {
      const data = await fileReader.readFile(filePath, "utf8");
      const user = JSON.parse(data);
      return user.account;
    } catch (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
    }
  },
  setUserCredentials: async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  },
};
