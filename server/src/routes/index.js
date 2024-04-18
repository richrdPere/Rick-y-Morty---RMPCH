const routes = require("express").Router();

import { getCharById } from "../controllers/getCharById";
import { postFav, deleteFav } from "../controllers/handleFavorites";
import login from "../controllers/login";



routes.get('/character/:id', getCharById);
routes.get('/login', login);

routes.post('/fav', postFav);

routes.delete('/fav/:id', deleteFav);




export default routes;