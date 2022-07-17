const { User } = require("../../models/user");
const { createError } = require("../../helpers");


const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  console.log(verificationToken);

  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw createError(404, "User not found");
  }
  console.log(user);
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.json({
    status: "success",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = verifyEmail;