import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function SignupForm({onLogout}) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })


    const handleChange = (e) => {
        setFormData(prev => {
            return {
                ...prev, 
                [e.target.name]: e.target.value
            }
        })
    }   

    const handleSubmit = (e) => {
        e.preventDefault()
        let params = {
          ...formData  
        }
        fetch("/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(json => {
            onLogout(json)
            navigate(`/home`)
        })
    }

    return (
        <div className="text-white">
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Create Username:</label>
                <input onChange={handleChange} type="text" name="username" value={formData.username}/>
                <label htmlFor="password">Create Password:</label>
                <input onChange={handleChange} type="password" name="password" value={formData.password}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignupForm;
