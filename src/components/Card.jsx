import ".././index.css";

// eslint-disable-next-line react/prop-types
const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
    return (
        <>
            <div className="" >
                <ul>
                <li><button onClick={onClose}>X</button></li>
                <li className="">{id}</li>
                <li className="">{name}</li>
                <li className="">{status}</li>
                <li className="">{species}</li>
                <li className="">{gender}</li>
                <li className="">{origin}</li>
                <li><img
                    className="card_image"
                    src={image}
                    alt="Imagen de un personaje"
                    />
                </li>
                </ul>
            </div>
        </>
    );
};
export default Card;

// export default function Card(props) {

//   return (

//   );
// }
