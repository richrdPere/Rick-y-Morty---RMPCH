import { useState } from "react";

import Cards from "./components/Cards";
import Nav from "./components/Nav";
//import { SearchBar } from "./components/SearchBar.jsx";
//import characters, {Rick} from './data.js';
import "./index.css";
import axios from "axios";

function App() {
    const [characters, setCharacters] = useState([]);

    const onClose = () => {
        window.alert("Emulamos que se cierra la card");
    };

    const onSearch = (id) => {

        axios.get(`https://rym2.up.railway.app/api/character/${id}?key=${pi-Seven00321}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert('¡No hay personajes con este ID!');
                }
            }
        );
        // const example = {
        //     id: 1,
        //     name: 'Rick Sanchez',
        //     status: 'Alive',
        //     species: 'Human',
        //     gender: 'Male',
        //     origin: {
        //        name: 'Earth (C-137)',
        //        url: 'https://rickandmortyapi.com/api/location/1',
        //     },
        //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        // };
        // setCharacters([...characters,example]);  

    }

    return (
        <>

            <div>
                {/* Titulo */}


                {/* Navbar */}
                <Nav onSearch={onSearch} />
                <Cards characters={characters} onClose={onClose} />
                {/* <Card 
                id={Rick.id}
                name={Rick.name}
                status={Rick.status}
                species={Rick.species}
                origin={Rick.origin.name}
                image={Rick.image}
                onClose={onClose}
            /> */}

            </div>


        </>
    );
}

export default App;
