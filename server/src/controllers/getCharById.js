const axios = require("axios");

exports.getCharById = (res, id) => {
    axios
    .get(`https://rym2.up.railway.app/api/character/${id}?key=pi-Seven00321`)
    .then((resp) => {
        let {name, gender, species, origin, image, status } = resp.data;

        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status,
        };

        return character;
    })
    .then((resp) => {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(resp));
    })
    .catch((reason) => {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end(JSON. stringify({error: reason.message}));
    })
};

