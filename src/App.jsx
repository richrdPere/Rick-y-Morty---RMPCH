import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Cards from "./components/Cards";
import Nav from "./components/Nav";
import About from "./components/About";
// import Form from "./components/Form";
//import { SearchBar } from "./components/SearchBar.jsx";
//import characters, {Rick} from './data.js';
import "./index.css";
import axios from "axios";
import Detail from "./components/Detail";
import LoginView from "./view/LoginView.jsx";
import FavouritesView from "./view/FavouritesView.jsx";
import HomeView from "./view/HomeView.jsx";
import DetailView from "./view/DetailView.jsx";


function App() {
    const [characters, setCharacters] = useState([]);
    const [ access, setAccess] = useState(false);
    const navigate = useNavigate();

    const emailAccess = "richrdpere321@gmail.com";
    const passwordAccess = "pass123";

    const login = (userData) => {
        if(userData.email === emailAccess && userData.password === passwordAccess){
            setAccess(true);
            navigate("/home");
        }
    }

    useEffect(()=>{
        !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access]);


    const { pathname } = useLocation();


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
                {/* { pathname !== "/login" && <Nav onSearch={onSearch} />} */}
                { pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

                <Routes>
                    {/* Ruta Principal */}
                    <Route path="/home" element={
                        <>
                            {/* Cards */}
                            {/* <Cards characters={characters} onClose={onClose} /> */}
                            <HomeView characters={characters} onClose={onClose}/>
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
                        <DetailView />
                    }>
                    </Route>

                    {/* Ruta Detail - Name */}
                    <Route path="/detail/:id/name" element={
                        <Detail/>
                    }>
                    </Route>

                    {/* Ruta Login */}
                    <Route path="/" element={<LoginView login={login}/>}>

                    </Route>

                    {/* Ruta Favourite */}
                    <Route path="/favourites" element={<FavouritesView/>}>

                    </Route>
                </Routes>


                {/* <Cards characters={characters} onClose={onClose} /> */}
            </div>
        </>
    );
}

export default App;
