import React from 'react'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div id="home">
        <main>
          <h1>Welcome to the LoL Summoner Spell Maker!</h1>
          <h3>Summon Your Champion!</h3>
        </main>
        <nav>
          <Link to="/champions">Champion Page</Link>
        </nav>
    </div>
  );
}
export default Home;
