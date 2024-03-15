import { useNavigate, Link } from 'react-router-dom';
import '.././index.css';
import SearchBar from './SearchBar.jsx';

// eslint-disable-next-line react/prop-types
const Nav = ({onSearch}) => {

    const navigate = useNavigate();

    return (
    <div className='navContainer'>
        <div className='navContainerLinks'>
            <Link className='navLink' to={'/home'}>Home</Link>
            <Link className='navLink' to={'/favourites'}>Favourites</Link>
            <Link className='navLink' to={'/about'}>About</Link>
        </div>
        
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
        {/* <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button> */}
        
    
    
    </div>
    )

}

export default Nav;




