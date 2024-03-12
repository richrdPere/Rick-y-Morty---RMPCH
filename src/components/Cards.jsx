/* eslint-disable react/prop-types */
import ".././index.css";
import Card from "./Card.jsx";

export default function Cards({ characters, onClose }){
    return (
        <div className="cardsContainer">
            {characters.map(({ id, name, status, species, gender, origin, image }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        image={image}

                        onClose={onClose}
                    />
                );
            })}
        </div>
    );
}

