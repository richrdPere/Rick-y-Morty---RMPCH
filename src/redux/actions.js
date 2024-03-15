import {ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV, GET_CHARACTER_DETAIL } from "./actions-types";

const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
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