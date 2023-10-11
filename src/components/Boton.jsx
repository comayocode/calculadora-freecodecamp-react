import React from 'react'
import '../stylesheets/Boton.css';

function Boton(props) {

  const esOPerador = (valor) => {
    return isNaN(valor) && (valor !== '.' && (valor !== '='));
  };

  return (
    <div
      className={`boton-contenedor ${esOPerador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}> {/* .trimEnd() elimina espacios */}
      {props.children}
    </div>
  );
};

export default Boton;