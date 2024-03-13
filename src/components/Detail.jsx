import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ".././index.css";

const Detail = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        axios.get(`https://rym2.up.railway.app/api/character/${id}?key={pi-Seven00321}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(() => data);
            } else {
                window.alert("No hay personajes con ese ID");
            }
            });
        // return setCharacter({});
    }, [id]);

    return !character ? <div>Cargando...</div> : (
        <div className="cardContainer">
            {/*Contenedor Button*/}
            <div className="btnContainer">
            <button className="btn" onClick={() => onClose(id)}>
                X
            </button>
            </div>

            {/*Contenedor Imagen y Nombre */}
            <div className="imgNombreContainer">
            <img className="imagen" src={character.image} alt="Imagen de un personaje" />
            <h3 className="name">{character.name}</h3>
            </div>

            {/*Contenedor Datos*/}
            <div className="datosContainer">
            <h3>
                estado: <span>{character.status}</span>
            </h3>
            <h3>
                especie: <span>{character.species}</span>
            </h3>
            <h3>
                genero: <span>{character.gender}</span>
            </h3>
            <h3>
                origen: <span>{character.origin.name}</span>
            </h3>
            </div>
        </div>
    )
};

export default Detail;
