import {ADD_FAV, REMOVE_FAV } from "./actions-types";

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

export {addFav, removeFav}