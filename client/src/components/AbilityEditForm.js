import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AbilityEditForm() {
  const [{ data: ability, errors, status }, setAbility] = useState({
    data: null,
    errors: [],
    status: "pending",
  });
  // const history = useHistory()
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
    e.preventDefault()
    fetch(`/abilities/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description
        }),
        }).then((r) => {
          if (r.ok) {
            console.log(`/champions/${id}`);
          } else {
            r.json().then((err) =>
              setAbility({ data: ability, errors: err.errors, status: "rejected" })
            );
          }
        });
  }
          
  return (
    <form onSubmit={handleSubmit}>
      <h2>{ability.name}</h2>
      <h6>Description: {ability.description}</h6>
        <textarea
          placeholder="Enter description..."
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.length > 0
          ? errors.map((err) => (
              <p key={err} style={{ color: "red" }}>
                {err}
              </p>
            ))
          : null}
        <br/>
      <button type="submit">Update Ability</button>
    </form>
    )
}
export default AbilityEditForm;
