const connection = require('../helpers/connect');
const bcrypt = require('bcrypt');
const validator = require('email-validator');

const vertificationEmail = require('../helpers/email/sendVertificatioEmail');
const resetEmail = require('../helpers/email/sendPasswordResetEmail');

// Register a new user
exports.registerUser = async (req, res) => {

    // Request body data decalration:
    const { email, firstname, lastname, phone , password, passwordconf } = req.body;

    // Validation
    if (!email || !firstname || !lastname || !phone || !password || !passwordconf) {
        return res.status(200).json({ msg: 'Please enter all fields' });

    // Checks if passwords match
    } else if (password !== passwordconf) {
        return res.status(200).json({ msg: 'Passwords do not match' });

    // Checks if user added a valid email
    } else if (!validator.validate(email)) {
        return res.status(200).json({ msg: 'Please enter a valid email' });   
        
    } else {
        // Password hashing method using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Check if user email already exists in the database
        connection.query('SELECT * FROM user WHERE email = ?', [email], function(error, results, fields){
            if(error){
                return res.status(400).json({ msg: 'Something went wrong' });
            }
            if(results.length > 0){
                return res.status(200).json({ msg: 'User with this email already exists' });
            } else {
                const fullname = firstname + ' ' + lastname;

                // Insert user data into the database
                connection.query('INSERT INTO user (name, password, phonenumber, email, street, postalCode, city, vertification) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
                    [fullname, hash, phone, email,'helloworld', '1763kg', 'Alkmaar', 0], function(error, results, fields){
                    if(error){
                        console.log(error);
                        return res.status(400).json({ msg: 'Something went wrong' });
                    }
                    // Send verification email
                    vertificationEmail.sendVertificatioEmail(results.insertId, email, res);
                    return res.status(200).json({ msg: 'User registered successfully' });
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
                    res.redirect('http://localhost:4200/register/verified');
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
        return res.status(200).json({ msg: 'Please enter all fields' });
    }

    connection.query('SELECT * FROM user WHERE email = ?', [req.body.email], function(error, results, fields){
        if(error){
            res.status(200).json({ msg: 'Something went wrong' });
            return;
        }
        if(results.length > 0){
            // Checks if user is vertified
            if(results[0].vertification == 0){
                return res.status(200).json({ msg: 'Please verify your email' });
            } else {
                const hashedPassword = results[0].password;

                // Compares password with the hashed password in the database
                bcrypt.compare(password, hashedPassword, function(err, result) {
                    if(result){
                        if(req.session.authenticated){
                            // res.json(req.session)
                        } else {
                            req.session.authenticated = true;
                            req.session.user = {
                            id: results[0].id,
                            email: results[0].email,
                        };
                        console.log(req.session);
                        req.session.destroy();
                        console.log(req.session);

                    }
                    } else {
                        return res.status(200).json({ msg: 'Password or Email is invalid' });
                    }
                });
            }
        } else {
            return res.status(200).json({ msg: 'Please enter an valid email or password' });
        }

    });

    console.log(email, password);
}

exports.resetPasswordEmailUser = (req, res) => {

    // Request body data decalration:
    const { email } = req.body;

    // Checks if email is filled in
    if(email == ""){
        return res.status(200).json({ msg: 'Please enter an email' });
    // Checks if user added a valid email
    } else if (!validator.validate(email)) {
        return res.status(200).json({ msg: 'Please enter a valid email' });   
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
                return res.status(200).json({ msg: 'Please enter an valid email or password' });
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
                            res.status(200).json({ msg: 'Link expired' });
                        } else {
                            console.log("Valid")
                            res.redirect('http://localhost:4200/reset-password-request/' + userId + '/' + uniqueString);
                        }
                    } else {
                        res.status(200).json({ msg: 'Unique string does not compare' });
                    }
                });
        } else {
            return res.status(200).json({ msg: 'No record found' });
        }

    });
    console.log(userId, uniqueString);
}