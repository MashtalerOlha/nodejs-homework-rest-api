const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "mashtaler887@meta.ua",
        pass: META_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);


    module.exports = transporter