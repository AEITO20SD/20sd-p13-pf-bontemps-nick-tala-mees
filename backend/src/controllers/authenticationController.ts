const connection = require('../helpers/connect');
import bcrypt from 'bcrypt';
import validator from 'email-validator';
import jwt from 'jsonwebtoken';

const vertificationEmail = require('../helpers/email/sendVertificatioEmail');
const resetEmail = require('../helpers/email/sendPasswordResetEmail');

const url = "http://localhost:4200/"

// UserRoles

// roleId 1 = gebruiker
// roleId 2 = bediende
// roleId 3 = chef
// roleId 4 = manager
// roleId 5 = eigenaar
// roleId 6 = admin

// Register a new user
exports.registerUser = async (req, res) => {

    // Request body data decalration:
    const { email, firstname, lastname, phone , password, passwordconf } = req.body;

    // Validation
    if (!email || !firstname || !lastname || !phone || !password || !passwordconf) {
        return res.status(200).json({ msg: 'Please enter all required fields', error: "true" });

    // Checks if passwords match
    } else if (password !== passwordconf) {
        return res.status(200).json({ msg: 'Please enter matching passwords', error: "true" });

    // Checks if user added a valid email
    } else if (!validator.validate(email)) {
        return res.status(200).json({ msg: 'Please enter a valid email', error: "true" });   
        
    } else {
        // Password hashing method using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Check if user email already exists in the database
        connection.query('SELECT * FROM user WHERE email = ?', [email], function(error, results, fields){
            if(error){
                return res.status(200).json({ msg: 'Something went wrong', error: "true" });
            }
            if(results.length > 0){
                return res.status(200).json({ msg: 'User with this email already exists', error: "true" });
            } else {
                const fullname = firstname + ' ' + lastname;

                // Insert user data into the database
                connection.query('INSERT INTO user (name, password, phonenumber, email, street, postalCode, city, vertification) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
                    [fullname, hash, phone, email,'helloworld', '1763kg', 'Alkmaar', 0], function(error, results, fields){
                    if(error){
                        console.log(error);
                        return res.status(200).json({ msg: 'Something went wrong', error: "true" });
                    }

                    // Insert user_role data into the database
                    connection.query('INSERT INTO user_role (userId, roleId) VALUES (?, ?)',
                        [results.insertId, 1], function(error, results, fields){
                        if(error){
                            console.log(error);
                            return res.status(200).json({ msg: 'Something went wrong', error: "true" });
                        }
                    });
                    
                    // Send verification email
                    vertificationEmail.sendVertificatioEmail(results.insertId, email, res);
                    return res.status(200).json({ msg: 'User registered successfully', error: "none" });
                });
            }
        });
    }
}

// Verify user with email and unique string
exports.verifyUser = (req, res) => {

    // Request body data decalration:
    let { userId, uniqueString } = req.params;

    connection.query('SELECT * FROM user_vertification_email WHERE userid = ?', [userId], function(error, results, fields){
        if(error){
            console.log('Error connecting to DB', error);
            return;
        } else {
            if(results.length >0){

                // Check if unique string matches
                bcrypt.compare(uniqueString, results[0].uniqueString, function(err, result) {
                
                // Checks if link is not expired
                if(results[0].expiredAt < new Date().toISOString().slice(0, 19).replace('T', ' ')){
                        connection.query("DELETE FROM user_vertification_email WHERE userId = ?", [userId], function(error, results, fields){
                        if(error){
                            console.log('Error connecting to DB', error);
                                return;
                            }
                        });
                    res.status(200).json({ msg: 'Link expired' });
                } else {

                    // Sets user vertification to true
                    connection.query("UPDATE user SET vertification = ? WHERE id = ?", [true ,userId], function(error, results, fields){
                        if(error){
                            console.log('Error connecting to DB', error);
                            return;
                        }
                    });

                    // Deletes user vertification link from the database
                    connection.query("DELETE FROM user_vertification_email WHERE userId = ?", [userId], function(error, results, fields){
                        if(error){
                            console.log('Error connecting to DB', error);
                            return;
                        }
                    });

                    // Redirects on succesfull verification
                    res.redirect(url + 'register/verified');
                }
            });
            } else {
                res.status(200).json({ msg: 'Something went wrong' });
            }
        }
    });
}

// Login user an existing user
exports.loginUser = (req, res) => {
    
    // Request body data decalration:
    const { email, password } = req.body;

    // Checks if all the required fields are filled in:
    if(email == "" || password == ""){
        return res.status(200).json({ msg: 'Please enter all fields', error: "true" });
    }

    connection.query('SELECT * FROM user WHERE email = ?', [req.body.email], function(error, results, fields){
        if(error){
            res.status(200).json({ msg: 'Something went wrong', error: "true" });
            return;
        }
        if(results.length > 0){
            // Checks if user is vertified
            if(results[0].vertification == 0){
                return res.status(200).json({ msg: 'Please verify your email', error: "true" });
            } else {
                const hashedPassword = results[0].password;
                const _id = results[0].id;

                // Compares password with the hashed password in the database
                bcrypt.compare(password, hashedPassword, function(err, result) {
                    if(result){

                        const token = jwt.sign({email: email, userId: _id}, '3456765^32456789765432456789854354645&#^#^', {expiresIn: '1h'});

                        res.status(200).json({ msg: 'User logged in successfully', token: token, userId: _id, expiresIn: 3600 });

                    } else {
                        return res.status(200).json({ msg: 'Password or Email is invalid', error: "true" });
                    }
                });
            }
        } else {
            return res.status(200).json({ msg: 'Please enter an valid email or password', error: "true" });
        }

    });

    console.log(email, password);
}

exports.resetPasswordEmailUser = (req, res) => {

    // Request body data decalration:
    const { email } = req.body;

    // Checks if email is filled in
    if(email == ""){
        return res.status(200).json({ msg: 'Please enter an email', error: "true" });
    // Checks if user added a valid email
    } else if (!validator.validate(email)) {
        return res.status(200).json({ msg: 'Please enter a valid email', error: "true" });   
    } else {
        connection.query('SELECT * FROM user WHERE email = ?', [email], function(error, results, fields){
            if(error){
                console.log('Error connecting to DB', error);
                return;
            } else if(results.length > 0){

                
                // Generates a unique string and sends and email to the user
                resetEmail.sendPasswordResetEmail(results[0].id, email, res);
                return res.status(200).json({ msg: 'Password recovery email send' });
            } else {
                return res.status(200).json({ msg: 'Please enter an valid email or password', error: "true" });
            }

        });
    }
}

exports.resetPasswordUserGet = (req, res) => {
    
    // Request body data decalration:
    let { userId, uniqueString } = req.params;

    connection.query('SELECT * FROM user_password_reset WHERE userId = ?', [userId], function(error, results, fields){
        if(error){
            console.log('Error connecting to DB', error);
            return;
        } else if(results.length > 0){
             console.log(uniqueString)
            bcrypt.compare(uniqueString, results[0].uniqueString, function(err, result) {
                    if(result){
                        if(results[0].expiredAt < new Date().toISOString().slice(0, 19).replace('T', ' ')){
                            connection.query("DELETE FROM user_vertification_email WHERE userId = ?", [userId], function(error, results, fields){
                                if(error){
                                    console.log('Error connecting to DB', error);
                                    return;
                                }
                            });
                            res.redirect(url + 'error/410');
                        } else {
                            console.log("Valid")
                            res.redirect(url + 'login/reset-password-new/' + userId + '/' + uniqueString);
                        }
                    } else {
                        // res.status(200).json({ msg: 'Unique string does not compare' });
                        res.redirect(url + 'error/403');
                    }
                });
        } else {
            return res.redirect(url + 'error/401');
        }

    });
    console.log(userId, uniqueString);
}

exports.resetPasswordUserCheck = (req, res) => {

    // Request body data decalration:
    let { _id, uniqueString } = req.body;

    console.log('INFORMATION: ' + _id, uniqueString);

    connection.query('SELECT * FROM user_password_reset WHERE userId = ?', [_id], function(error, results, fields){
        if(error){
            console.log('Error connecting to DB', error);
            return;
        } else if(results.length > 0){
             console.log(uniqueString)
            bcrypt.compare(uniqueString, results[0].uniqueString, function(err, result) {
                    if(result){
                        if(results[0].expiredAt < new Date().toISOString().slice(0, 19).replace('T', ' ')){
                            connection.query("DELETE FROM user_vertification_email WHERE userId = ?", [_id], function(error, results, fields){
                                if(error){
                                    console.log('Error connecting to DB', error);
                                    return;
                                }
                            });
                            res.status(200).json({ msg: 'Link expired' });
                        }
                    } else {
                        res.status(200).json({ msg: 'Unique string does not compare' });
                        res.redirect(url + 'error/403');
                    }
                });
        } else {
            res.status(200).json({ msg: 'Unique string does not compare' });
            res.redirect(url + 'error/403');
        }

    });
}

exports.resetPasswordUserPost = (req, res) => {

    // Request body data decalration:
    let { _id, uniqueString, password } = req.body;

    connection.query('SELECT * FROM user WHERE id = ?', [_id],async function(error, results, fields){
        if(error){
            console.log('Error connecting to DB', error);
            return;
        } else if(results.length > 0){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            connection.query('UPDATE user SET password = ? WHERE id = ?', [hashedPassword, _id], function(error, results, fields){
                if(error){
                    console.log('Error connecting to DB', error);
                    return;
                }
                connection.query("DELETE FROM user_password_reset WHERE userId = ?", [_id], function(error, results, fields){
                    if(error){
                        console.log('Error connecting to DB', error);
                        return;
                    }
                });
                return res.status(200).json({ msg: 'Password has been succesfully reset' });
            });
        } else {
            return res.status(200).json({ msg: 'No record found', error: "true" });
        }
        
    });
}