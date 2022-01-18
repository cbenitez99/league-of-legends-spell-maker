import { React } from 'react';
import {NavLink, useNavigate} from "react-router-dom"

function Ability({champion}) {
    let navigate = useNavigate();
    return (
        <div>
            {!!champion.id ? 
            <div>{champion.abilities.map((champAbility)=> 
                <div key={champAbility.id}>
                    <h1>{champAbility.name}</h1>
                    <p>{champAbility.description}</p>
                    <NavLink to={`/champions/${champAbility.id}/edit`}>Edit Ability</NavLink>
                    <br/>
                    {/* <NavLink champion={champion} to={`/champions/${champAbility.id}/abilities/new`} >Add New Ability</NavLink> */}
                    <NavLink to={`/champions/${champion.id}/abilities/new`} state={{ champion: champion }}>Add new ability</NavLink>
                    <br/>
                        <button onClick={() => {
                                fetch(`/abilities/${champAbility.id}`, {
                                    method: "DELETE",
                                    headers: {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json"
                                    }
                                }).then(resp => {
                                    navigate("/champions")
                                    console.log(resp)
                                })
                            }}>DELETE
                        </button>
                    
                    {/* <NavLink to={ {pathname:`/champions/${champAbility.id}/abilities/new`, aboutProps:{champion:champion.id} } }exact={champion}>Preview Question</NavLink> */}
                </div>
                )}
            </div> : 
            <div>Loading...</div>}
        </div>
    )
}
export default Ability;
