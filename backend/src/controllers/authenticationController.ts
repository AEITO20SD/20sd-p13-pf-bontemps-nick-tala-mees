const connection = require('../helpers/connect');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    console.log(req.body);

    // Request body data decalration:
    const { email, firstname, lastname, phone , password, passwordconf } = req.body;

    // Validation
    if (!email || !firstname || !lastname || !phone || !password || !passwordconf) {
        return res.status(200).json({ msg: 'Please enter all fields' });
    } else if (password !== passwordconf) {
        return res.status(200).json({ msg: 'Passwords do not match' });
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
                connection.query('INSERT INTO user (name, password, phonenumber, email, street, postalCode, city) VALUES (?, ?, ?, ?, ?, ?, ?)', 
                    [fullname, hash, phone, email,'helloworld', '1763kg', 'Alkmaar'], function(error, results, fields){
                    if(error){
                        console.log(error);
                        return res.status(400).json({ msg: 'Something went wrong' });
                    }
                    return res.status(200).json({ msg: 'User registered successfully' });
                });
            }
        });
    }
}

exports.loginUser = (req, res) => {
    console.log(req.body);
}