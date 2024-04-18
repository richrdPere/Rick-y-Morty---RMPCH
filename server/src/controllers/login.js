const users = require('../utils/users');

const login = (req, res) => {
    const {email, password } = req.query;
    let access = false;

    users.forEach((users) => {
        if(users.email === email && users.password === password){
            access.true;
        }
    });

    return res.status(200).json({access});
}

module.exports = login;