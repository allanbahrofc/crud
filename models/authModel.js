const credencialUser = require("./credencialModel");

module.exports = {
  auth: (method, user, pass) => {
    switch (method) {
      case "signup":
        // Registro
        credencialUser.getUserCredentials();
        console.log(credencialUser.username);
        console.log(credencialUser.password);
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
