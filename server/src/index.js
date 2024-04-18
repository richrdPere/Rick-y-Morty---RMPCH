
/* SERVER - HTTPS
// const http = require("http");
// const PORT = 3001;
// const characters = require("./utils/data");
// const {getCharById} = require("./controllers/getCharById");

// http
//     .createServer((req, res) => {
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         const { url } = req;

//         if(url.includes("/rickandmorty/character")){
//             let urlArray = url.split("/"); //["rickandmorty", "character", "5"]
//             let id = Number(urlArray.pop());

//             try{
//                 getCharById(res, id);
//             } catch(error){
//                 console.log(error);
//             }   
//         }
//     })
//     .listen(PORT, "localhost");
*/

// SERVER - Express
const express = require('express');
const server = express();
const PORT = 3001;
const routes = require("./routes/index").default;
const morgan = require("morgan");

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", routes);


server.listen(PORT, () => {
   console.log(`Server raised in port ${PORT}`);
});

