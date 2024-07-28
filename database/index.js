// Package Imports
const Sequelize = require("sequelize");

// Local Imports
const { User } = require("./models");
const dbConfig = require("./db.config");

class Database {
  static db = {};
  static connect() {
    const sequelize = new Sequelize(
      dbConfig.DB,
      dbConfig.USER,
      dbConfig.PASSWORD,
      {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: { ...dbConfig.pool },
      }
    );

    const { db } = Database;

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.User = User(sequelize);

    db.sequelize
      .sync()
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });
  }
}

module.exports = Database;
