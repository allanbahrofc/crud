module.exports = {
  auth: (method) => {
    switch (method) {
      case "signup":
        return 'registro aqui'
      case "signin":
        return 'login aqui'
      default:
        return 404;
    }
  },
  
};
