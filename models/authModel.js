module.exports = {
  auth: (method, user, pass) => {
    switch (method) {
      case "signup":
      // Registro
      break
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
