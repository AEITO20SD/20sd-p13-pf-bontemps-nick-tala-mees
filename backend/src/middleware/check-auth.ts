import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "3456765^32456789765432456789854354645&#^#^");
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Auth failed'
        });
    }
};