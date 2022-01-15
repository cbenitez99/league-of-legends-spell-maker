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
            <div>{champion.abilities.map((champAbility)=> champAbility &&
                <div key={champAbility.id}>
                    <h1>{champAbility.name}</h1>
                    <p>{champAbility.description}</p>
                    <NavLink to={`/champions/${champion.id}/edit`}>Edit Ability</NavLink>
                    <br/>
                    <NavLink to={`/champions/${champAbility.id}/abilities/new`}>Add New Ability</NavLink>
                    {console.log(champAbility)}
                </div>
                )}
            </div> : 
            <div>Loading...</div>}
        </div>
    )
}
export default Ability;
