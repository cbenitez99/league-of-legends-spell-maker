import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function AbilityEditForm(){
    const [abilities, setAbilities] = useState([])
    const history = useHistory()
    const {id} = useParams()
    const [description, setDescription] = useState("")

    useEffect(() => {
        fetch(`/abilities/${id}`)
        .then(res => res.json())
        .then(data => {
            setAbilities(data)
            setDescription(data.description)
        })
    }, [id])

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/abilities/${abilities.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description,
          }),
        }).then((r) => {
          if (r.ok) {
            history.push(`/abilities/${abilities.id}`);
          } else {
            r.json().then((err) =>
              setAbilities({ data: abilities, errors: err.errors, status: "rejected" })
            );
          }
        });
      }
    return (
        <form onSubmit={handleSubmit}>
            <p>Edit: {abilities.description}</p>
        </form>
    )
}

export default AbilityEditForm;