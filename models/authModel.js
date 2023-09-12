module.exports = {
  auth: (method) => {
    switch (method) {
      case "signup":
        this.signup();
      case "signin":
        this.signin();
      default:
        return 404;
    }
  },
  signup: () => {
    console.log("Identificando que se trata de um registro.");
  },
  signin: () => {
    console.log("Identificando que se trata de um login");
  },
};
