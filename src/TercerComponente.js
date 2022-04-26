import React from 'react'

export const TercerComponente = ({nombre,apellidos,ficha}) => {
    
  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.estado}</li>
        </ul>

    </div>
  )
}
