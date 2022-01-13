import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function LoginForm({setUser}) {
    let navigate = useNavigate();


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
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            setUser(json)
            navigate(`/`)
        })
    }

    return (
        <div className="text-white">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" name="username" value={formData.username}/>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" name="password" value={formData.password}/>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}