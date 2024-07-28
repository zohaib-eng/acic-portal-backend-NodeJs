const { DataTypes } = require("sequelize");
const authConfig = require("../../middleware/auth.config");
const { v4: uuidv4 } = require("uuid");

module.exports = (db) => {
  const User = db.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
    token: {
      type: DataTypes.TEXT
    },
    expireDate: {
      type: DataTypes.DATE,
    }
  });

  return User;
};


RefreshToken.createToken = async function (user) {
  let expiredAt = new Date();

  expiredAt.setSeconds(expiredAt.getSeconds() + authConfig.jwtRefreshExpiration);

  let _token = uuidv4();

  let refreshToken = await this.createToken({
    token: _token,
    userId: user.id,
    expireDate: expiredAt.getTime()
  });

  return refreshToken.token;
}

RefreshToken.verfyExpiration = (token) => {
  return token.expireDate.getTime() < new Date().getTime();
};

return RefreshToken;












// RefreshToken.createToken = async function (user) {
//   let expiredAt = new Date();

//   expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

//   let _token = uuidv4();

//   let refreshToken = await this.create({
//     token: _token,
//     userId: user.id,
//     expiryDate: expiredAt.getTime(),
//   });

//   return refreshToken.token;
// };

// RefreshToken.verifyExpiration = (token) => {
//   return token.expiryDate.getTime() < new Date().getTime();
// };

// return RefreshToken;