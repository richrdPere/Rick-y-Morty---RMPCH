/* eslint-disable react/prop-types */
import '.././index.css'


const SearchBar = ({ onSearch }) => {
   return (
      <div>
         <input className='searchInput' />
         <button 
            className='btnSearch' 
            onClick={onSearch}
         >
            Agregar
         </button>
      </div>
   );
}

export default SearchBar;