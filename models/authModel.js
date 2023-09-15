const { getUserCredencial, setUserCredencial } = require("./credencialModel");

actualCredencial = getUserCredencial()
module.exports = {
  auth: (method, user, pass) => {
    switch (method) {
      case "signup":
        // Registro
        return "registro";
      case "signin":
        if (user == "admin" && pass == "12345") {
          return actualCredencial.username;
        } else {
          return false;
        }
      default:
        return 404;
    }
  },
};
