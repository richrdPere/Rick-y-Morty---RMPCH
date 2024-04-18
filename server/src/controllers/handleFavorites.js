let myFavourites = [];


const postFav = (req, res) => {

    myFavourites.push(req.body);

    return res.JSON(myFavourites);
};

const deleteFav = (req, res) => {
    const {id} = req.params;

    const deleteChar = myFavourites.filter((char) => {
        return char.id !== id;
    });

    myFavourites = deleteChar;

    return res.JSON(myFavourites);
}

module.exports = { postFav, deleteFav };