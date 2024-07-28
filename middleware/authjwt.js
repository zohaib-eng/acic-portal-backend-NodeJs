const jwt = require("jsonwebtoken");
const config = require("../middleware/auth.config");

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: "Unauthorized! Access Token was expired!"});
    }

    return res.status(401).send({ message: "Unauthorized! Access Token was expired!"});
}


const verifyToken = (req, res, next) => {
    let token = req.headers[ "x-access-token" ];

    if(!token) {
        return res.status(403).send({ message: " No token Provided! "})
    }

    jwt.verify(token, config.secret, (err, decode) => {
        if(err) {
            return catchError(err, res);
        }
        req.userId = decode.id;
        next();
    });
};












// const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");

// const { TokenExpiredError } = jwt;

// const catchError = (err, res) => {
//   if (err instanceof TokenExpiredError) {
//     return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
//   }

//   return res.sendStatus(401).send({ message: "Unauthorized!" });
// }

// const verifyToken = (req, res, next) => {
//   let token = req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send({ message: "No token provided!" });
//   }

//   jwt.verify(token, config.secret, (err, decoded) => {
//     if (err) {
//       return catchError(err, res);
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };