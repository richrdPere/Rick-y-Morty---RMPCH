const users = require('../utils/users');

exports.login = (req, res) => {
    const {email, password } = req.query;

    let user = users.find((us) => us.email === email && us.password === password);

    return user 
        ? res.status(200).json({ access: true })
        : res.status(404).json({ access: false });
    //let access = false;

    // users.forEach((users) => {
    //     if(users.email === email && users.password === password){
    //         access.true;
    //     }
    // });

    //return res.status(200).json({access:true});
}

