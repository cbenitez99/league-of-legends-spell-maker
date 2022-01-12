import React from 'react'
import { NavLink} from 'react-router-dom'

function Navbar({user, setUser, Onlogout}) {
    return (
        <div>
            <nav className='black'>
                <div className="nav-wrapper">
                {/* <a href="/" className="brand-logo">HOME</a> */}
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>
                        {/* <li><NavLink to="/champions">Champion List</NavLink></li> */}
                        <li><NavLink to="/champions/abilities/new">Create Ability</NavLink></li>
                        <li><a href="/login" onClick={(e) => {
                                e.preventDefault()
                                fetch('/logout', {
                                    method: "DELETE",
                                    headers: {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json"
                                    }
                                }).then(resp => {
                                    setUser({})
                                    // navigate("/")
                                })
                                }}>Logout</a>
                            </li>
                    </ul>
                </div>
            </nav>
        </div> 
    )
}
export default Navbar;


