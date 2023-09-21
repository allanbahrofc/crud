const credencialModel = require("./credencialModel");

module.exports = {
  auth: async (method, user, pass) => {
    switch (method) {
      case "signup":
        let creation = await credencialModel
          .setUserCredentials(user, pass)
          .then((code) => {
            return code;
          });
        return creation;
      case "signin":
        let auth = await credencialModel.getUserCredentials().then((data) => {
          if (data.username == user && data.password == pass) {
            return 202;
          } else {
            return 401;
          }
        });
        return auth;
      default:
        return 400;
    }
  },
};
