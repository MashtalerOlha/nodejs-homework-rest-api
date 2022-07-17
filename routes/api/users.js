const express = require("express");
const router = express.Router();

const controlWrapper = require("../../helpers/controlWrapper");
const {auth, upload } = require("../../middlewares");
const {getCurrent, updateSubscription, updateAvatar, verifyEmail} = require("../../controllers/users");

module.exports = router;

router.get("/current", auth, controlWrapper(getCurrent));
router.patch("/", auth, controlWrapper(updateSubscription));
router.patch("/avatars", auth, upload.single("avatar"), controlWrapper(updateAvatar) );
router.get("/verify/:verificationToken", controlWrapper(verifyEmail));

