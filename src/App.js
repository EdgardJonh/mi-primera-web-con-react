
import './App.css';
import  Testimonio  from "./componentes/Testimonio";
//exportaciones nombradas {Testimonio} o esportaciones por defecto   export default Testimonio;

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio 
        nombre = 'Edgard'
        img = 'img1'
      />
      <Testimonio 
        nombre = 'Edgard'
        img = 'img2'
      />
      <Testimonio 
        nombre = 'Edgard'
        img = 'img3'
      />
      </div>
     
    </div>
  );
}

export default App;
