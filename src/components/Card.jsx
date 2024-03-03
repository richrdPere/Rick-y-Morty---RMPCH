import '.././index.css'

export default function Card(props) {


  return (
    <div className='card'>
      <button onClick={props.onClose}>X</button>
      <h2 className='card_name'>{props.name}</h2>
      <h2 className='card_status'>{props.status}</h2>
      <h2 className='card_species'>{props.species}</h2>
      <h2 className='card_gender'>{props.gender}</h2>
      <h2 className='card_origin'>{props.origin}</h2>
      <img className='card_image' src={props.image} alt="Imagen de un personaje" />
    </div>
  );
}
