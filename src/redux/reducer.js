/* eslint-disable no-case-declarations */
import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            };

        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter((fav) => {
                fav.id !== Number(action.payload);
            });
            return {
                ...state,
                myFavorites: filteredFavs,
            }
        default: 
            return {...state};
    }

}

export default rootReducer;