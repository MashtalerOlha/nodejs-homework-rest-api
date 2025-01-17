const { Contact } = require("../../models/contact");
const createError = require("../../helpers/createError");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);

  if (!result) {
    throw createError(404);
  }

  res.json({
    message: "Contact deleted!",
  });
};

module.exports = removeContact;
