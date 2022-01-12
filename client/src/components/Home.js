// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h3>WELCOME TO THE LEAGUE OF LEGENDS SPELL MAKER</h3>
            <Link to="/champions">Your CHAMPIONS</Link>
        </div>
    )
}
export default Home;
