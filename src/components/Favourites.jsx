/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux"
import Cards from "./Cards"

const Favourites = ({myFavorites}) => {
    return (
        <div>
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