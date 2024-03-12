import '.././index.css';
import SearchBar from './SearchBar.jsx';

// eslint-disable-next-line react/prop-types
const Nav = ({onSearch}) => {
    return (
    <div className='navContainer'>
        <SearchBar onSearch={onSearch}/>
    
    
    </div>
    )

}

export default Nav;




