import './App.css';
import { useState } from 'react';

function App() {
  const [consj, setConsej] = useState([])
  const [term, setTerm] = useState("")
  const [bConsj, setBConsj] = useState([])
  
  const handleTermChange = (event) => setTerm(event.target.value);

  const getConsj = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => setConsej(data.slip.advice));
  }
  const getBConsj = () => {
    fetch(`https://api.adviceslip.com/advice/search/${term}`)
    .then(response => response.json())
    .then((data) => setBConsj(data.slips[0].advice));
  }
  return (
    <main>

      <h1>Evaluación React - Requests</h1>
      <h1>Consejos de vida</h1>

      <div>
        <h2>Obtener un consejo aleatorio</h2>
        <button onClick={getConsj}>Obtener</button>
        <p className="result-box">{consj}</p>
      </div>

      <div>
        <h2>Buscar un consejo</h2>
        <input type="text" onChange={handleTermChange} />
        <button onClick={getBConsj}>Enviar</button>
        <h3>Resultados de búsqueda:</h3>
        <p className="result-box">{bConsj}</p>
      </div>

    </main>
  );
}

export default App;
