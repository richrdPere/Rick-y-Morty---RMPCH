import { useState } from "react";

import Cards from "./components/Cards";
import Nav from "./components/Nav.jsx";
//import { SearchBar } from "./components/SearchBar.jsx";
//import characters from './data.js';
import "./index.css";

function App() {
    const [characters, setCharacters] = useState([{}]);

    const onClose = () => {
        window.alert("Emulamos que se cierra la card");
    };

    const onSearch = () => {
        const example = {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            origin: {
               name: 'Earth (C-137)',
               url: 'https://rickandmortyapi.com/api/location/1',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        };
        setCharacters([example]);  
    }

    return (
        <>
        {/* Header */}
        <div className="">
            {/* Titulo */}
            {/* <h1 className='header-titulo'><span>Rick and</span> Morty</h1> */}

            {/* Navbar */}
            <Nav onSearch={onSearch}/>
            <Cards characters={characters} onClose={onClose} />
            
        </div>

        {/* Main */}
        {/* <div className="container">
            
        </div> */}
        </>
    );
}

export default App;
