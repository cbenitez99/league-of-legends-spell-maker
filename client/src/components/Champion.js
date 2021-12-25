import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Champion({champion_abilities, handleDelete}) {
  
  const [{ data: champion, error, status }, setChampion] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/champions/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((champ) =>
          setChampion({ data: champ, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setChampion({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading Page...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section>
      <h2>{champion.name}</h2>
      <h5><em>"{champion.bio}"</em></h5>
      <h3>This Champion's Abilities:</h3>
      <ul>
        {champion.abilities.map((ability) => (
          <h3 key={champion.id}>
            <Link to={`/abilities/${ability.id}`}>{ability.name}</Link>
          </h3>
        ))}
      </ul>

      <Link to="/champion_abilities/new">Add Champion Spell</Link>
    </section>
  );
}

export default Champion;
