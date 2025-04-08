import { useState, useEffect, useMemo, memoo } from 'react';
import './App.css';

const PoliticianCard = memo(({ name, image, position, biography }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Posizione</strong>: {position}</p>
      <p>{biography}</p>
    </div>);
})

function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
      .then(res => res.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error))
  })

  const filteredPoliticians = useMemo(() => {
    return politicians.filter(politician => {
      const isInName = politician.name.toLowerCase().includes(search.toLowerCase());
      const isInBio = politician.biography.toLowerCase().includes(search.toLowerCase());
      return isInName || isInBio;
    });
  }, [politicians, search]);

  return (
    <>
      <h1>Lista Politici</h1>
      <input
        type="text"
        placeholder='Cerca un politico'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="politicians-list">
        {filteredPoliticians.map(politician => (
          <PoliticianCard key={politician.id} {...politician} />
        ))}
      </div>
    </>
  )
}

export default App
