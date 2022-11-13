import React from "react";
import '../hojas-de-estilos/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }){
  return(
    <button 
      className={esBotonDeClic ? 'boton-clic' : 'boton-reinicia'}
      onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton;