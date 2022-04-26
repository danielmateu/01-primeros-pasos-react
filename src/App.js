import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al Master En REACT
        </p>
        {/* Cargar mi componente */}
      <MiComponente/>
      </header>
    </div>
  );
}

export default App;
