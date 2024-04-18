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

const URL = `https://rym2.up.railway.app/api/`;

const axios = require("axios");

exports.getCharById = async (req, res) => {
  // extraemos el id de req con Params
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}?key=pi-Seven00321`);

    if (data) {
      const { id, name, gender, species, origin, image, status } = data;

      let character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };

      return res.status(200).json(character);
    }

    return res.status(404).json({ error: "Not found" });
  } catch (error) {
    return rs.status(500).json(error.message);
  }

  // const { id } = req.params;

  // axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-Seven00321`)
  // .then((resp) => {
  //     let {name, gender, species, origin, image, status } = resp.data;

  //     const character = {
  //         id,
  //         name,
  //         gender,
  //         species,
  //         origin,
  //         image,
  //         status,
  //     };

  //     return character.name
  //     ? res.JSON(character)
  //     : res.status(404).send("Not found");
  // })
  // .catch((reason) => {
  //     return res.status(500).send(reason.message);
  // });
};
