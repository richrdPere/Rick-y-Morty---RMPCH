import Card from "./Card";
//import index from ".././index.css";
import ".././index.css";

export default function Cards({ characters }) {
    return (
        <div className="">
            <div className="grid">
                {characters.map(ch => {
                return (
                    <Card
                    key={ch.id}
                    name={ch.name}
                    status={ch.status}
                    species={ch.species}
                    gender={ch.gender}
                    origin={ch.origin.name}
                    image={ch.image}
                    onClose={() => window.alert("Emulamos que se cierra la card")}
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
