/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import ".././index.css";
import {addFav, removeFav} from "../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }){

    const navigate = useNavigate();

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        myFavorites.forEach((fav) => {
           if (fav.id === id) {
              setIsFav(true);
           }
        });
     }, [myFavorites]);

    const handleFavorite = () => {
        isFav ? removeFav(id):
         addFav({
            id,
            image,
            name,
            status,
            species
         })

         setIsFav(!isFav)
    }
 
    return (
        <div className="cardContainer" >
            

            {/*Contenedor Button*/}
            <div className="btnContainer">
            {
                isFav ? (
                    <button className="btnFavorite" onClick={handleFavorite}>❤️</button>
                ) : (
                    <button className="btnFavorite" onClick={handleFavorite}>🤍</button>
                )
            }
                <button className="btn" onClick={() => onClose(id)}>X</button>
            </div>

            {/*Contenedor Imagen y Nombre */}
            <div className="imgNombreContainer" onClick={() => navigate(`/detail/${id}`)}>
                <img
                    className="imagen"
                    src={image}
                    alt="Imagen de un personaje"
                />
                <h2 className="name">{name}</h2>
            </div>

            {/*Contenedor Datos*/}
            <div className="datosContainer">
                <h3>estado <span>{status}</span></h3>
                <h3>especie <span>{species}</span></h3>
                <h3>genero <span>{gender}</span></h3>
                {/* <h3>origen <span>{origin}</span></h3> */}
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => {
            dispatch(addFav(character));
        },
        removeFav: (id) => {
            dispatch(removeFav(id));
        }
    };
};

const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

