import Cards from "../components/Cards"
import ".././index.css";

const HomeView = ({characters, onClose}) => {
  return (
    <div className="homeContenedor">
        <h1>Lista de Personajes - Rick and Morty</h1>

        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default HomeView