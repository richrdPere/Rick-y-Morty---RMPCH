/* getCharById - HTTPS 
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
*/

//const URL = `https://rym2.up.railway.app/api/character/${id}?key=pi-Seven00321`

const axios = require("axios");


exports.getCharById = (req, res) => {
    // extraemos ek id de req con Params
    const { id } = req.params;

    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-Seven00321`)
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

        return character.name 
        ? res.JSON(character)
        : res.status(404).send("Not found");
    })
    .catch((reason) => {
        return res.status(500).send(reason.message);
    });
};