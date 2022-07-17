const { User } = require("../../models/user");
const createError = require("../../helpers/createError");
const bcrypt = require("bcrypt");
const gravatar = require('gravatar');
const { v4 } = require('uuid');
const {transporter} = require("../../helpers")

const register = async (req, res) => {
  const verificationToken = v4();
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const avatarURL = gravatar.url(email);
  const passwordHash = await bcrypt.hash(password, 10);

  const result = await User.create({ ...req.body, password: passwordHash, avatarURL, verificationToken });

  const mail = {
    to: email,
    from: "mashtaler887@meta.ua",
    subject: "Підтвердження емейлу",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Підтвердити емейл</a>`,
  };

  transporter.sendMail(mail)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))


  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      avatarURL,
      verificationToken
    },
  });
};

module.exports = register;
