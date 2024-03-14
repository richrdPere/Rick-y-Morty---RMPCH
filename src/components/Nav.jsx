import { useNavigate, Link } from 'react-router-dom';
import '.././index.css';
import SearchBar from './SearchBar.jsx';

// eslint-disable-next-line react/prop-types
const Nav = ({onSearch}) => {

    const navigate = useNavigate();

    return (
    <div className='navContainer'>

        <Link to={'/home'}>Home</Link>
        <Link to={'/favourites'}>About</Link>
        <Link to={'/about'}>Favourites</Link>
        {/* <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button> */}
        <SearchBar onSearch={onSearch}/>
    
    
    </div>
    )

}

export default Nav;




