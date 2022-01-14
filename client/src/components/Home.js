import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Home({user}) {
  console.log(user)

  if (!!user){
    return(
      <div id="home">
        <main>
          <h1>Welcome to the LoL Summoner Spell Maker!</h1>
          <h3>Summon your champion!</h3>
        </main>
        <nav>
          <Link to="/champions">Champion Page</Link>
        </nav>
      </div>
    );
  } else {
    return (
      <div id="home">
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
export default Home;