const { Schema, model } = require("mongoose");
const Joi = require("joi");

const subscription = ["starter", "pro", "business"];

const userRegisterShema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
});

const userLoginShema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscription)
    .required(),
});

const userShema = Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: subscription,
    default: "starter",
  },
  token: String,
  avatarURL: {
    type: String,
  },
});

const User = model("user", userShema);

module.exports = {
  User,
  userRegisterShema,
  userLoginShema,
  updateSubscriptionSchema,
};
