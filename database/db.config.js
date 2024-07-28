module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "acic_portal",
  PORT: 5432,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
