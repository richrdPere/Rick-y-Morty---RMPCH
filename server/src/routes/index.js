const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
// const { login } = require("../controllers/login")
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { postUser} = require("../controllers/postUser");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");

const routes = Router();

routes.get('/character/:id', getCharById);
// routes.get('/login', login);
// routes.post('/fav', postFav);
// routes.delete('/fav/:id', deleteFav);

routes.post("/login", postUser);
routes.get("/login", login)
routes.post("/fav", postFav);
routes.delete("/fav/:id", deleteFav)



module.exports = routes;