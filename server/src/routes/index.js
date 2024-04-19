const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login")
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const routes = Router();

routes.get('/character/:id', getCharById);
routes.get('/login', login);

routes.post('/fav', postFav);

routes.delete('/fav/:id', deleteFav);




module.exports = routes;