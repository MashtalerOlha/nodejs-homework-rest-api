const { Contact } = require("../../models/contact");
const createError = require("../../helpers/createError");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw createError(404);
  }

  res.json(result);
};

module.exports = updateFavorite;
