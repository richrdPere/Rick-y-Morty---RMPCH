import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Cards from "./components/Cards";
import Nav from "./components/Nav";
import About from "./components/About";
//import { SearchBar } from "./components/SearchBar.jsx";
//import characters, {Rick} from './data.js';
import "./index.css";
import axios from "axios";
import Detail from "./components/Detail";

function App() {
    const [characters, setCharacters] = useState([]);

    const onClose = (id) => {
        let filterCharacteres = characters.filter((ch) => {
            return ch.id !== id;
        });

        setCharacters(filterCharacteres);
    };

    const onSearch = (id) => {

        axios.get(`https://rym2.up.railway.app/api/character/${id}?key={pi-Seven00321}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert('¡No hay personajes con este ID!');
                }
            }
        );
    }

    return (
        <>
            <div>
                {/* Nav */}
                <Nav onSearch={onSearch} />

                <Routes>
                    {/* Ruta Principal */}
                    <Route path="/" element={
                        <>
                            {/* Cards */}
                            <Cards characters={characters} onClose={onClose} />
                        </>
                    } />

                    {/* Ruta About */}
                    <Route path="/about" element={
                        <>
                            <About/>
                        </>
                    }>
                    </Route>

                    {/* Ruta Detail */}
                    <Route path="/detail/:id" element={
                        <Detail/>
                    }>

                    </Route>

                </Routes>


                {/* <Cards characters={characters} onClose={onClose} /> */}
            </div>
        </>
    );
}

export default App;
