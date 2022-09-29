const {v4: uuidv4} = require('uuid');
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

const connection = require('../connect');
const emailsender = require('./emailSender');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});

exports.sendPasswordResetEmail = async (_id, email, res) => {
    
    // Start of the url send in the email
    const currentUrl = "http://localhost:3080/";

    const uniqueString = uuidv4() + _id;

    // Mailoptions for styling the email
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: 'Reset Password',
        html: `<h1>Please click the link to Reset your password</h1>
        <p> this link expires in 6 hours </p>
                <a href="${currentUrl + "users/login/reset-password/" + _id + "/" + uniqueString}">Reset</a>`
    }

    // Sends the email to the user and inserts data into the database
    emailsender.emailsender(_id, uniqueString, transporter, mailOptions, "user_password_reset");
}