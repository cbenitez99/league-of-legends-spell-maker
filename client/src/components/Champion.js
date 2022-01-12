import React from 'react'
import { NavLink } from 'react-router-dom'

function Champion({champions}) {
  
  return (
    <div>
      <h1>Available Champions</h1>
      {champions.map((champion) => 
      <div key={champion.id}>
        <h2>{champion.name}</h2> 
        <li>{champion.bio}</li>
        <img src={champion.image} alt={champion.name}></img>
        <br/>
        <NavLink to={`/champions/${champion.id}`}>See Abilities</NavLink>
      </div>
      )}
    </div>
  )
}
export default Champion;
