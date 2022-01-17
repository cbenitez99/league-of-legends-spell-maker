import React from 'react'
import { Link } from 'react-router-dom';

function Home({user}) {

  if (!!user){
    return(
      <div>
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
      <div>
        
          <h1>Welcome to the LoL Summoner Spell Maker!</h1>
          
      </div>
    );
  }
}
export default Home;