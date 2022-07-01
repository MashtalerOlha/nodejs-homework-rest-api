const { Schema, model} = require("mongoose");
const Joi = require("joi");

const userRegisterShema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    subscription:Joi.string()
})

const userShema = Schema(
    {
        password: {
          type: String,
          required: [true, 'Set password for user'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        token: String
      }
);

const User = model("user", userShema);

module.exports = {
    User,
    userRegisterShema,
};