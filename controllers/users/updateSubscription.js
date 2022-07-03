const { User, updateSubscriptionSchema } = require("../../models/user");
const { createError } = require("../../helpers");

const updateSubscription = async (req, res) => {

  const { _id } = req.user;
  const { subscription } = req.body;
  const { error } = updateSubscriptionSchema.validate({ subscription });

  if (error) {
    throw createError(400);
  }
  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  res.json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = updateSubscription;