/* eslint-disable react/prop-types */
import ".././index.css";
import Card from "./Card";

const Cards = ({characters, onClose}) => {
    return (
        <div className="contenedorCards">
            <div className="grid">
                {characters.map(({id, name, status, species, gender, origin, image}) => {
                    return (
                        <Card
                            key={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    );
                })}
            </div>

            {/* <ul className="contenedor-flex">
                <li className="grid">
                    
                </li>
                </ul> */}
        </div>
    );
}

export default Cards;
