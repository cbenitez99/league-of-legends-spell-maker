import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Champion() {
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

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section>
      <h2>{champion.name}</h2>

      <h3>Abilities:</h3>
      <ul>
        {champion.abilities.map((ability) => (
          <li key={champion.id}>
            <Link to={`/abilities/${ability.id}`}>{ability.name}</Link>
          </li>
        ))}
      </ul>

      <Link to="/champion_abilities/new">Add Champion Ability</Link>
    </section>
  );
}

export default Champion;
