import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Ability() {
  const [{ data: ability, error, status }, setAbility] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/abilities/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((ability) =>
          setAbility({ data: ability, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setAbility({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section>
      <h2>{ability.name}</h2>
      <p>{ability.description}</p>
      <p>
        <Link to="/champion_abilities/new">Add ability to Champion</Link>
      </p>
      <p>
        <Link to={`/abilities/${ability.id}/edit`}>Edit Ability Description</Link>
      </p>
      {/* <p>Remove This Ability: "{ability.name}"<button onClick={handleClick}>x</button></p> */}
    </section>
  );
}

export default Ability;
