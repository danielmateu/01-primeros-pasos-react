import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e,nombre) =>{
        alert(`Has dado Click ${nombre}`);
    }

  return (
    <div>
        <h1>Eventos En React</h1>
        {/* Evento Click */}
    <button onClick={e => hasDadoClick(e,'Dani')}>Dame Click!</button>

    </div>
  )
}
