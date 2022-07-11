const { User } = require("../../models/user");
const createError = require("../../helpers/createError");
const bcrypt = require("bcrypt");
const gravatar = require('gravatar');


const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const avatarURL = gravatar.url(email);
  const passwordHash = await bcrypt.hash(password, 10);
  const result = await User.create({ ...req.body, password: passwordHash, avatarURL });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      avatarURL
    },
  });
};

module.exports = register;
