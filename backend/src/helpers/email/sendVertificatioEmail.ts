const {v4: uuidv4} = require('uuid');
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

const connection = require('../connect');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});

exports.sendVertificatioEmail = async (_id, email, res) => {

    // Start of the url send in the email
    const currentUrl = "http://localhost:3080/";

    const uniqueString = uuidv4() + _id;

    // Mailoptions for styling the email
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: 'Account Verification BonTemps',
        html: ` <h1>Please click the link to verify your account</h1>
                <p> this link expires in 6 hours </p>
                <a href="${currentUrl + "users/register/verify/" + _id + "/" + uniqueString}">Verify</a>`
    }

    // Send the emailing the email and insert data into the database
    const saltRounds = 10;
     bcrypt.hash(uniqueString, saltRounds).then((hashedUniqueString) => {
        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const expiredAt = new Date(Date.now() + 216000).toISOString().slice(0, 19).replace('T', ' ');
         connection.query("INSERT INTO user_vertification_email (uniqueString, userId, expiredAt, createdAt) VALUES (?, ?, ?, ?)", 
            [hashedUniqueString, _id, expiredAt, createdAt], function(error, results, fields){
                if(error){
                    console.log(error);
                    // return res.status(400).json({ msg: 'Something went wrong' });
                } else {
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } 
                });
            }          
            });
     }).catch((err) => {
        console.log(err);
    });
}   