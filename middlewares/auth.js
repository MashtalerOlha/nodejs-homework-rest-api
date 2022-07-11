const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { createError } = require("../helpers");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {

  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer") {
      throw createError(401);
    }

    let id = null;

    jwt.verify(token, SECRET_KEY, function (error, result) {
      if (error) {
        throw createError(401, error.message);
      } else {
        id = result.id;
      }
    });

    const user = await User.findById(id);
    if (!user?.token) {
      throw createError(401);
    }

    req.user = user;

    next();
  } catch (error) {
    if (error.message === "Invalid signature") {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = auth;
