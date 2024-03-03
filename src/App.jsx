import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import characters, {Rick} from './data.js';
import './index.css';


function App() {
 
    return (
        <>
            {/* Header */}
            <div className='header'>
                {/* Titulo */}
                <h1 className='header-titulo'><span>Rick and</span> Morty</h1>

                {/* Search Bar */}
                <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
            </div>
            
            {/* Main */}
            <div className='container'>  
                <Cards characters={characters}/>
            </div>

            

        </>
    )
}

export default App;
