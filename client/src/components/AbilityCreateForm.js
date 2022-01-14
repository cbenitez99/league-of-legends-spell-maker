import React, {useState} from 'react'
// import {useNavigate} from "react-router-dom"

function AbilityCreateForm() {
    
    // const [champion, setChampion] = useState([])

    // let navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: ""
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
        fetch("/abilities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            // navigate(`/champions/${id}`)
            
        })
    }

    return (
        <div className="text-white">
            <h1>Make an ability!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Ability name:</label>
                <input onChange={handleChange} type="text" name="name" value={formData.name}/>
                <label htmlFor="password">Ability description:</label>
                <input onChange={handleChange} type="text" name="description" value={formData.description}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default AbilityCreateForm;