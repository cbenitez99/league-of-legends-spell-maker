import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
function Navbar({user, setUser}) {
    let navigate = useNavigate();
    return (
        <div>
            <nav className='black'>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">HOME</a>  
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {/* <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li> */}
                        {/* <li><NavLink to="/champions/abilities/new">Create Ability</NavLink></li> */}
                        {!!user.id ? 
                        <div className="nav-wrapper">
                            <li><NavLink to={`/users/${user.id}`}>Profile</NavLink></li>
                            <li><a href="/delete" onClick={(e) => {
                                e.preventDefault()
                                fetch('/logout', {
                                    method: "DELETE",
                                    headers: {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json"
                                    }
                                }).then(resp => {
                                    setUser({})
                                    navigate("/")
                                })
                            }}>Logout</a></li>

                        </div>
                        :
                        <div>
                            <li><NavLink to="/signup" >Signup</NavLink></li>
                            <li><NavLink to="/login" >Login</NavLink></li>
                        </div>
                        }
                    </ul>
                </div>
            </nav>
        </div> 
    )
}
export default Navbar;

