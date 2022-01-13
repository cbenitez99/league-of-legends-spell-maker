import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"

function AbilityCreateForm({champions}) {

  const {id} = useParams()
  const [champion, setChampion] = useState([])

  // if(!!champions) {
  //   let selectedChampion = champions.find((champion) => champion.id === Number(id))
  //   setChampion({...selectedChampion})
  // }

  
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        champion_id: champion.id
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
            navigate(`/champions/${id}`)
            
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