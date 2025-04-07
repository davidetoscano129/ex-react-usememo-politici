import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
      .then(res => res.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error))
  })

  return (
    <>
      <h1>Lista Politici</h1>
      <div className="politicians-list">
        {politicians.map(politician => (
          <div className="card" key={politician.id}>
            <img src={politician.image} alt={politician.name} />
            <h2>{politician.name}</h2>
            <p><strong>Posizione</strong>: {politician.position}</p>
            <p>{politician.biography}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
