import { useEffect, useState } from "react"

const Detail = () => {

   const [character, setCharacter] = useState();

   console.log("Funciona");

   useEffect(() => {
      axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-Seven00321}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(() => data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setCharacter({});
   }, [id]);


   return (
      <div>

      </div>
   )
}

export default Detail