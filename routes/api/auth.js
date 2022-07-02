const express = require("express");
const router = express.Router();

const controlWrapper = require("../../helpers/controlWrapper");
const controllers = require("../../controllers/auth");
const { validation, auth } = require("../../middlewares");
const { userRegisterShema, userLoginShema } = require("../../models/user");

module.exports = router;

router.post(
  "/register",
  validation(userRegisterShema),
  controlWrapper(controllers.register)
);

router.post(
  "/login",
  validation(userLoginShema),
  controlWrapper(controllers.login)
);

router.post("/logout", auth, controlWrapper(controllers.logout));
