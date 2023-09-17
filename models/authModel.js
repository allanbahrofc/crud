const credencialModel = require("./credencialModel");

module.exports = {
  auth: async (method, user, pass) => {
    switch (method) {
      case "signup":
        return 201;
      case "signin":
        const auth = await credencialModel.getUserCredentials().then((data) => {
          if (data.username == user && data.password == pass) {
            return 202;
          } else {
            return 406;
          }
        });
        return auth;
      default:
        return 404;
    }
  },
};
