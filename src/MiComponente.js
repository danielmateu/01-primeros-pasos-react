// Importar modulos de react/dependencias
import React,{Fragment} from 'react'

//Funcion del COmponente
const MiComponente = () =>{

    // const nombre = 'Daniel';
    // const web = 'wwww.danielmateu.es';

    let usuario = {
        nombre: "Daniel",
        apellidos: "Mateu Pardo",
        edad: 36,
        web: 'www.danielmateu.es'
    };

    

    return (
    <div className="MiComponente">
    
    <h2>Componente Creado</h2>
    <h3>Datos del usuario:</h3>
    <ul>
        <li>Nombre: <strong>{JSON.stringify(usuario.nombre)}</strong></li>
        <li>Apellidos: <strong>{JSON.stringify(usuario.apellidos)}</strong></li>
        <li>Web: <strong>{JSON.stringify(usuario.web)}</strong></li>
    </ul>
    <p>Este es mi primer componente</p>
    <ul>
        <li>
            React
        </li>
        <li>
            Angular
        </li>
        <li>
            Vue
        </li>
    </ul>
    </div>
    
    )
}


//Export
export default MiComponente;