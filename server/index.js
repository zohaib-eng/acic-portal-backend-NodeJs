// Package Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Local Imports
const Database = require("../database");
const Router = require("../routes");

// Constants
const PORT = 3000;

class Server {
  static server = express();
  static init() {
    const { server } = Server;
    // server initial config
    server.use(bodyParser.json());
    server.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    // use cors
    server.use(cors({ origin: "*" }));
    // parse requests of content-type - application/json
    server.use(express.json());

    // Initiate the database
    Database.connect();

    // Routes
    Router.declareRoutes(server);

    // Listen to defined port
    server.listen(PORT, () => {
      console.log(`App running on port ${PORT}.`);
    });
  }
}

module.exports = Server;
