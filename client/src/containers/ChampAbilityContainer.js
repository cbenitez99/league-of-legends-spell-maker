import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Ability from '../components/Ability'
//pass a prop to see ability stats
export default function ChampAbilityContainer({champions}) {
    const [abilities, setAbilities] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch("/abilities")
          .then((r) => r.json())
          .then((data) => {
              setAbilities(data)
          });
      }, []);
    
    return ( 
        <div>
            <Ability champions={champions} abilities={abilities}/>
            {/* {!!champion.id ? 
            <div>{champion.abilities.map((champAbility)=> 
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
            <div>Loading...</div>} */}
        </div>        
    )
}
