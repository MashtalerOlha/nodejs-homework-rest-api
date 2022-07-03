const express = require("express");
const router = express.Router();

const controlWrapper = require("../../helpers/controlWrapper");
const auth = require("../../middlewares/auth");
const {getCurrent, updateSubscription} = require("../../controllers/users");

module.exports = router;

router.get("/current", auth, controlWrapper(getCurrent));
router.patch("/", auth, controlWrapper(updateSubscription));

