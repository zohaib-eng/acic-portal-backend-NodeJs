// Local Imports
const user = require("./user.routes");

class Router {
  static declareRoutes = (server) => {
    // Routes
    server.use("/users", user);

    // default index route
    server.get("/", () =>
      console.log(
        "Well, What Can I Say? Thanks for trying this project, I guess..."
      )
    );
  };
}

module.exports = Router;
