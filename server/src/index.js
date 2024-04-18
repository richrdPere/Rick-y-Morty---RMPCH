const http = require("http");
const PORT = 3001;
const characters = require("./utils/data");
const {getCharById} = require("./controllers/getCharById");

http
    .createServer((req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const { url } = req;
        
        // if(url.includes("/rickandmorty/character")){
        //     // "/rickandmorty/character: id"
        //     const id = Number(url.split('/').pop());

        //     const character = characters.find((char) => {
        //         return char.id === id;
        //     });

        //     // res.writeHead(200, {'Content-Type': 'application/json'});
        //     // res.end(JSON.stringify(character));

        //     if(character){
        //         res.writeHead(200, {"Content-Type": "application/json"});
        //         res.end(JSON.stringify(character));
        //     } else{
        //         res.writeHead(404, {"Content-Type": "application/json"});
        //         res.end(JSON. stringify({error: "Character not Found"}));
        //     }
        // }

        if(url.includes("/rickandmorty/character")){
            let urlArray = url.split("/"); //["rickandmorty", "character", "5"]
            let id = Number(urlArray.pop());

            try{
                getCharById(res, id);
            } catch(error){
                console.log(error);
            }   
        }
    })
    .listen(PORT, "localhost");