const contacts = require("../servise/contacts");
const createError = require("../helpers/createError");

const getContactById = async (req, res) => {
    const { id } = req.params;
    const result = await contacts.getContactById(id);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
};

module.exports = getContactById;
