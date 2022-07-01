const { User } = require("../../models/user");
const createError = require("../../helpers/createError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("express");
const { use } = require("../../app");

const { SECRET_KEY} = process.env;

const login = async(req, res) => {
 const { email, password} = req.body;
const user = await User.findOne({email});
const isPasswordCorrect =bcrypt.compare(password, user.password);

if(!user || !isPasswordCorrect){
    throw createError(401, "Email or password is wrong")
}
const payload = {
    id: user._id
}
const token = jwt.sign(payload, SECRET_KEY, {expiresIn:  "1h"});
json.res({
    token,
    user:{
        email: user.email,
        subscription: user.subscription,
    }
})
}

module.exports = login