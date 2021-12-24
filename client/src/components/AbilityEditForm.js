import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function AbilityEditForm(){
    const [{ data: ability, errors, status }, setAbility] = useState({
      data: null,
      errors: [],
      status: "pending",
    });
    const history = useHistory()
    const {id} = useParams()
    const [description, setDescription] = useState("")

    useEffect(() => {
        fetch(`/abilities/${id}`).then((r)=>{
          if (r.ok) {
            r.json().then((ability) => {
              setAbility({data: ability, errors: [], status: "resolved"});
            });
          } else {
            r.json().then((error) =>
            setAbility({data: null, errors: [error.error], status: "rejected"})
            );
          }
        });
    }, [id]);

    if (status === "pending") return <h3>Loading...</h3>

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/abilities/${ability.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description,
          }),
        }).then((r) => {
          if (r.ok) {
            history.push(`/abilities/${ability.id}`);
          } else {
            r.json().then((err) =>
              setAbility({ data: ability, errors: err.errors, status: "rejected" })
            );
          }
        });
      }
    return (
      <form onSubmit={handleSubmit}>
      <h2>Editing {ability.name}</h2>
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.length > 0
        ? errors.map((err) => (
            <p key={err} style={{ color: "orange" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Update Ability</button>
    </form>
    )
}

export default AbilityEditForm;