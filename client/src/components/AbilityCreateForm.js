import React, {useState} from 'react'
// import {useParams} from 'react-router-dom'
// import {useNavigate} from "react-router-dom"
//create ability with champion id and user id
function AbilityCreateForm({champions}) {
    
    // const [champion, setChampion] = useState([])

    // useEffect(()=>{
    //     if(!!champions) {
    //         let selectedChampion = champions.find((champion) => champion.id === Number(id))
    //         setChampion({...selectedChampion})
    //     }
    // }, [setChampion, id, champions])
    // let navigate = useNavigate();

    // const [abilities, setAbilities] = useState([]);
    // useEffect(() => {
    //     fetch(`abilities`)
    //     .then((r) => r.json())
    //     .then((data) => {
    //         setAbilities(data)
    //     })
    // }, []);

    const [formData, setFormData] = useState([{
        name: "",
        description: "",
        // champion_id: '', //CHAMPION.ID
        // user_id: ''      //USER.ID 
    }])

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
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(params)
        })
        .then((r) => {
            if(r.ok){
                alert("Ability created")
            } else {
                console.log(r);
            }
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