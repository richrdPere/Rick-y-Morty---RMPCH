import { useNavigate } from "react-router-dom";
import ".././index.css";

// eslint-disable-next-line react/prop-types
export default function Card({ id, name, status, species, gender, origin, image, onClose }){

    const navigate = useNavigate();

    return (
        <div className="cardContainer" onClick={() => navigate(`/detail/${id}`)}>
            {/*Contenedor Button*/}
            <div className="btnContainer">
                <button className="btn" onClick={() => onClose(id)}>X</button>
            </div>

            {/*Contenedor Imagen y Nombre */}
            <div className="imgNombreContainer">
                <img
                    className="imagen"
                    src={image}
                    alt="Imagen de un personaje"
                />
                <h3 className="name">{name}</h3>
            </div>

            {/*Contenedor Datos*/}
            <div className="datosContainer">
                <h3>estado: <span>{status}</span></h3>
                <h3>especie: <span>{species}</span></h3>
                <h3>genero: <span>{gender}</span></h3>
                <h3>origen: <span>{origin}</span></h3>
            </div>
        </div>
    );
};

