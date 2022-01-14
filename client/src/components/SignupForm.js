import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function SignupForm({setUser}) {
    let navigate = useNavigate()
    const {id} = useParams()

    const [formData, setFormData] = useState({
        username: "",
        password: "",
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
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            // setUser(json)
            navigate(`/login`)
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
