import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
// import {useNavigate} from "react-router-dom"
//create ability with champion id and user id
function AbilityCreateForm({user, setAbilities}) {
   
    const location = useLocation()
    const { champion } = location.state
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        champion_id: champion.id,
        user_id: user.id
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
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => {
            if(resp.ok){
                resp.json()
                .then((json) => {
                    alert("Created!")
                    navigate(`/users/${json.id}`)
                })
            } else {
                console.log(resp)
            }
        })
    };
    

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