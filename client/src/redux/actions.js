import {ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV, GET_CHARACTER_DETAIL } from "./actions-types";
import axios from "axios";

const addFav = (character) => {
    // return {
    //     type: ADD_FAV,
    //     payload: character
    // }
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
}

const removeFav = (id) => {
    // return {
    //     type: REMOVE_FAV,
    //     payload: id
    // }
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
        });
        });
    };
}

const filterFavs = (gender) => {
    return {
        type: FILTER_FAV,
        payload: gender
    }
}
const orderFavs = (order) => {
    return {
        type: ORDER_FAV,
        payload: order
    }
}

const getCharacterDetail = (id) => {
    return function(dispatch){
        const URL_BASE = "https://rym2.up.railway.app/api";
        const KEY = "{pi-Seven00321}";

        fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then(( response ) => response.json())
        .then((data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data}));

        // axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
        // .then(({ data }) => {
        //     if (data.name) {
        //         setCharacter(() => data);
        //     } else {
        //         window.alert("No hay personajes con ese ID");
        //     }
        //     });

        
    };
}

export {addFav, removeFav, filterFavs, orderFavs, getCharacterDetail}