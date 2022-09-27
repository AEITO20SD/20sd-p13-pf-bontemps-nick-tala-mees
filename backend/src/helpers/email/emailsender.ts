import bcrypt from 'bcrypt';

const connection = require('../connect');

exports.emailsender = (_id, uniqueString, transporter, mailOptions, datatable) => {
    //hash the unique string
    const saltRounds = 10;
     bcrypt.hash(uniqueString, saltRounds).then((hashedUniqueString) => {
        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const expiredAt = new Date(Date.now() + 216000).toISOString().slice(0, 19).replace('T', ' ');
         connection.query(`INSERT INTO ${datatable} (uniqueString, userId, expiredAt, createdAt) VALUES (?, ?, ?, ?)`, 
            [hashedUniqueString, _id, expiredAt, createdAt], function(error, results, fields){
                if(error){
                    console.log(error);
                } else {
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } 
                    console.log('Email sent: ' + info.response);
                });
            }          
            });
     }).catch((err) => {
         console.log(err);
     });
}