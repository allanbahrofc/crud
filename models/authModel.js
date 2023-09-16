const credencialModel = require("./credencialModel");

module.exports = {
  auth: async (method, user, pass) => {
    switch (method) {
      case "signup":
        // Registro
        await credencialModel.getUserCredentials().then((user) => {
          console.log(user.user.account);
        });
        return "registro";
      case "signin":
        if (user == "admin" && pass == "12345") {
          return true;
        } else {
          return false;
        }
      default:
        return 404;
    }
  },
};
