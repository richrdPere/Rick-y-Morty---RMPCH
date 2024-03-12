/* eslint-disable react/prop-types */
import { useState } from 'react';
import '.././index.css'

export default function SearchBar({ onSearch }){

   const [id, setId] = useState([]);

   const handlerChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className='searchContainer'>
         {/* Search Input */}
         <input 
            className='inputSearch' 
            type='search'
            onChange={handlerChange}
            value={id}
         />
         {/* Search Button */}
         <button 
            className='btnSearch' 
            onClick={() => onSearch(id)}
         >
            Agregar
         </button>         
      </div>
   );
}

