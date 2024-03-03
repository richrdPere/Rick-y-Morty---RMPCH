import '.././index.css'

export default function SearchBar({onSearch}) {
   return (
      <div className='contenedorSeachBar'>
         <input className='inputSearch' type='search' />
         <button className='btnSearch' onClick={onSearch}>Agregar</button>
      </div>
   );
}
