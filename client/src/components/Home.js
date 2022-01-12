// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    // return (
    //     <div>
    //         <h3>WELCOME TO THE LEAGUE OF LEGENDS SPELL MAKER</h3>
    //         <Link to="/champions">Your CHAMPIONS</Link>
    //     </div>
    // )
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
