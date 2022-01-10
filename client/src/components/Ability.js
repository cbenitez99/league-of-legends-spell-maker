// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// function Ability() {

//   const [championAbilities, setChampionAbilities] = useState([])

//   useEffect(() => {
//     fetch(`/abilities/${id}`).then((r) => {
//       if (r.ok) {
//         r.json().then((ability) =>
//           setAbility({ data: ability, error: null, status: "resolved" })
//         );
//       } else {
//         r.json().then((err) =>
//           setAbility({ data: null, error: err.error, status: "rejected" })
//         );
//       }
//     });
//   }, [id]);

//   if (status === "pending") return <h1>Loading...</h1>;
//   if (status === "rejected") return <h1>Error: {error.error}</h1>;
//   function handleDelete(id){
//     fetch(`/abilities/${id}`, {
//         method: "DELETE",
//       }).then((r) => {
//         console.log(r)
//         if (r.ok) {
//           setChampionAbilities((abilities)=>
//           abilities.filter((ability) => ability.id !== id));
//         }
//     });
//   }

//   const [{ data: ability, error, status }, setAbility] = useState({
//     data: null,
//     error: null,
//     status: "pending",
//   });

//   const { id } = useParams();

  

//   return (
//     <section>
//       <h2>{ability.name}</h2>
//       <p>{ability.description}</p>
//       <p>
//         <Link to="/champion_abilities/new">Add ability to Champion</Link>
//       </p>
//       <p>
//         <Link to={`/abilities/${ability.id}/edit`}>Edit Ability Description</Link>
//       </p>
//       <button onClick={()=>handleDelete(ability.id)}><Link to="/">Delete: {ability.name}</Link></button>
//     </section>
//   );
// }

// export default Ability;
import { React, useState, useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom"

function Ability({champions}) {
    const [champion, setChampion] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        if(!!champions) {
            let selectedChampion = champions.find((champion) => champion.id === Number(id))
            setChampion({...selectedChampion})
        }
    }, [setChampion, id, champions])

    return (
        <div>
            {!!champion.id ? 
            <div>{champion.abilities.map((champAbility)=>
                <div>
                    <h1>{champAbility.name}</h1>
                    <p>{champAbility.description}</p>
                    <NavLink to={`/champions/${champion.id}/edit`}>Edit Ability</NavLink>
                </div>
                )}
            </div> : 
            <div>Loading...</div>}
        </div>
    )
}
export default Ability;
