import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='black'>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">HOME</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>
                        <li><NavLink to="/champions">Champion List</NavLink></li>
                        <li><NavLink to="/champions/abilities/new">Create Ability</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div> 
    )
}
export default Navbar;


