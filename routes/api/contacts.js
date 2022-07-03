const express = require("express");
const router = express.Router();

const { validation, isValidId, auth } = require("../../middlewares");
const { contactAddSchema, updateFavorite } = require("../../models/contact");

const controllers = require("../../controllers/contacts");
const controlWrapper = require("../../helpers/controlWrapper");

router.get("/", auth, controlWrapper(controllers.getAll));

router.get("/:id", isValidId, controlWrapper(controllers.getContactById));

router.post(
  "/",
  auth,
  validation(contactAddSchema),
  controlWrapper(controllers.addContact)
);

router.delete("/:id", isValidId, controlWrapper(controllers.removeContact));

router.put(
  "/:id",
  isValidId,
  validation(contactAddSchema),
  controlWrapper(controllers.updateContact)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validation(updateFavorite),
  controlWrapper(controllers.updateFavorite)
);

module.exports = router;
