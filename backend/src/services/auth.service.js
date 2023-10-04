const jwt = require('jsonwebtoken');

const createtoken = (id) =>
    jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: '1h' });


module.exports = {
    createtoken,
}