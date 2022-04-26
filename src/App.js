import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';


function App() {

  const ficha_medica={
    altura: '190cm',
    grupo: 'H+',
    estado: 'Bueno',
    alergias: 'Gatos'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al Master En REACT
        </p>
        {/* Cargar mi componente */}
        
        <div className="componentes">
          <hr/>
          <EventosComponente/>
          <hr></hr>
          <TercerComponente 
          // nombre='Daniel'
          // apellidos='Mateu Pardo'
          ficha={ficha_medica}
          />

          <hr></hr>
          <SegundoComponente/>
          
          <hr/>
          <MiComponente/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
