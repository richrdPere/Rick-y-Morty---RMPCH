/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect, useDispatch } from "react-redux"
import Cards from "./Cards"
import ".././index.css";
import { filterFavs, orderFavs } from "../redux/actions";
import { useState } from "react";

const Favourites = ({myFavorites}) => {

    const dispatch = useDispatch();

    const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];
    const [ aux, setAux] = useState(false);

    const handlerOrder = (e) => {
        dispatch(orderFavs(e.target.value));
        setAux(!aux);
    }

    const handlerFilter = (e) => {
        dispatch(filterFavs(e.target.value));
    }

    return (
        <div className="favoriteContenedor">
            <select onChange={handlerOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>


            <select onChange={handlerFilter}>
                {optionsGender.map((op) => (
                    <option key={op} value={op}>
                        {op}
                    </option>
                ))}
            </select>

            <Cards characters={myFavorites}/>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}
export default connect(mapStateToProps)(Favourites)