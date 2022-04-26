import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e,nombre) =>{
        alert(`Has dado Click ${nombre}`);
    }
    const dobleClick = (e) =>{
        alert('Has dado Doble Click')
    }

    const hasEntrado = (e,accion) =>{
        alert(`Has ${accion} a la caja con el mouse!`);
    }

  return (
    <div>
        <h1>Eventos En React</h1>
        <p>
             {/* Evento Click */}
            <button onClick={e => hasDadoClick(e,'Dani')}>Dame Click!</button>
        </p>
        <p>
            {/* Evento Doble Click */}
            <button onDoubleClick={e => dobleClick(e)}>Dame Doble Click!</button>
        </p>

        <div id="caja" 
        onMouseEnter={e => hasEntrado(e,'entrado')}
        onMouseLeave={e => hasEntrado(e,'salido')}>
            {/* Evento onMouseEnter onMouseLeave */}
            Pasa por encima!
        </div>
    </div>
  )
}
