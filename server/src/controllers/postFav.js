const {Favorite} = require("../DB_connection");

exports.postFav = async (req, res) => {
    const { id, name, status, image, species, gender} = req.body;
    console.log(req.body);
    
    try{
        
        
        if(!id || !name || !status || !image || !species || !gender) 
            return res.status(400).json({error: "Faltan datos"});

        const [charFav, created] = await Favorite.findOrCreate({
            where: {id}, 
            defaults: {
                name,
                origin:"earth",
                status,
                image,
                species,
                gender 
            },
        });

        if(!created){
            return res
                .status(409)
                .json({error: "El personaje ya fue creado"})
        }
        const allFavs = await Favorite.findAll()

        return res.status(200).json(allFavs);

    } catch(error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}
