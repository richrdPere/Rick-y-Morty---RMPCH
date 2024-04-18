/* eslint-disable no-case-declarations */
import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV, GET_CHARACTER_DETAIL } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            // return {
            //     ...state,
            //     myFavorites: [...state.myFavorites, action.payload],
            //     allCharacters: [...state.allCharacters, action.payload]
            // };
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };

        case REMOVE_FAV:
            // const filteredFavs = state.myFavorites.filter((fav) => {
            //     fav.id !== Number(action.payload);
            // });
            // return {
            //     ...state,
            //     myFavorites: filteredFavs,
            // }
            return { 
                ...state, 
                myFavorites: action.payload 
            };

        case FILTER_FAV:
            // const filterFavs = state.allCharacters.filter( char => char.gender.toLowerCase() === action.payload.toLowerCase())
            const filterFavs = action.payload === "All" ? 
            state.allCharacters 
            : state.allCharacters.filter( (char) => {
                return char.gender === action.payload;
            })

            return {
                ...state, 
                myFavorites: filterFavs,
            };
        
        case ORDER_FAV:
            const orderFavs = state.myFavorites.sort((a,b) => {
                return action.payload === "A" ? a.id - b.id : b.id - a.id;
            });

            return {
                ...state,
                myFavorites: orderFavs,
            };

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            }
        default: 
            return {...state};
    }

}

export default rootReducer;