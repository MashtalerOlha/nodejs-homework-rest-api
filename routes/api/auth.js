const express = require("express");
const router = express.Router();

const controlWrapper = require("../../helpers/controlWrapper");
const controllers = require("../../controllers/auth");
const { validation } = require("../../middlewares");
const {userRegisterShema, userLoginShema} = require("../../models/user")

module.exports = router;

router.post("/users/register",validation(userRegisterShema), controlWrapper(controllers.register));

router.post("/users/login",validation(userLoginShema), controlWrapper(controllers.login));
