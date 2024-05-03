const { User } = require("../DB_connection");

exports.login = async (req, res) => {
    const { email, password } = req.query;

    try {
        if (!email || !password)
            return res.status(409).json({ error: "El email ya esta registrado" });

        const user = await User.findOne({
        where: { email },
        });

        if (!user) 
            return res.status(404).json({ error: "Usuario no encontrado" });

        return user.password === password 
        ? res.status(200).json({access: true})
        : res
            .status(403)
            .json({error: "Contraseña incorrecta"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
};

// const users = require('../utils/users');

// exports.login = (req, res) => {
//     const {email, password } = req.query;

//     let user = users.find((us) => us.email === email && us.password === password);

//     return user
//         ? res.status(200).json({ access: true })
//         : res.status(404).json({ access: false });
//     //let access = false;

//     // users.forEach((users) => {
//     //     if(users.email === email && users.password === password){
//     //         access.true;
//     //     }
//     // });

//     //return res.status(200).json({access:true});
// }
