import React from 'react'
import {Link} from 'react-router-dom'

export default function Profile({user}) {
    if (user){
        return(
          <div>
            <main>
              <h1>Welcome {user.username}</h1>
              <h3>Summon your champion!</h3>
            </main>
            <nav>
              <Link to="/champions">Champion Page</Link>
            </nav>
          </div>
        );
      } else {
        return (
          <div>
            <main>
              <h1>Welcome to the LoL Summoner Spell Maker!</h1>
              <h3>Please Login or Signup to Continue!</h3>
            </main>
            {/* <NavLink to={`/login`}>Login</NavLink>
            <br/>
            <NavLink to={`/signup`}>Signup</NavLink> */}
          </div>
        );
      }
}