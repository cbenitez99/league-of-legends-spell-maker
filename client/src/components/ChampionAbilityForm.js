import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function ChampionAbilityForm() {
  const [champions, setChampions] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [champion_id, setChampionId] = useState("");
  const [ability_id, setAbilityId] = useState("");
  const [cooldown, setCooldown] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/champions")
      .then((r) => r.json())
      .then(setChampions);
  }, []);

  useEffect(() => {
    fetch("/abilities")
      .then((r) => r.json())
      .then(setAbilities);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      champion_id: champion_id,
      ability_id: ability_id,
      cooldown
    };
    fetch("/champion_abilities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        history.push(`/champions/${champion_id}`);
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ability_id">Ability:</label>
      <select
        id="ability_id"
        name="ability_id"
        value={ability_id}
        onChange={(e) => setAbilityId(e.target.value)}
      >
        <option value="">Select an ability</option>
        {abilities.map((ability) => (
          <option key={ability.id} value={ability.id}>
            {ability.name}
          </option>
        ))}
      </select>
      <label htmlFor="champion_id">Champion:</label>
      <select
        id="champion_id"
        name="champion_id"
        value={champion_id}
        onChange={(e) => setChampionId(e.target.value)}
      >
        <option value="">Select a champion</option>
        {champions.map((champion) => (
          <option key={champion.id} value={champion.id}>
            {champion.name}
          </option>
        ))}
      </select>
      <label htmlFor="cooldown">Description:</label>
      <input
        type="number"
        min="1"
        max="60"
        id="cooldown"
        name="cooldown"
        value={cooldown}
        onChange={(e) => setCooldown(e.target.value)}
      />
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "orange" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Add champion ability</button>
    </form>
  );
}

export default ChampionAbilityForm;
