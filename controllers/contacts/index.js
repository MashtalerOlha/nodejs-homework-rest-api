const getAll = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
};