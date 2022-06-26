const { Schema, model} = require("mongoose");
const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(
      /^((\+38)?\(?\d{3}\)?[\s.-]?(\d{7}|\d{3}[\s.-]\d{2}[\s.-]\d{2}|\d{3}-\d{4}))$/
    )
    .required(),
    favorite: Joi.boolean(),
});

const updateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
})

const contactSchema = Schema(
    {
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      }
);

const Contact  = model("contact", contactSchema);

module.exports = {Contact, contactAddSchema, updateFavorite};