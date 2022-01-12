// import { React, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// function AbilityCreateForm({handlePost}) {
//     // let navigate = useNavigate();    
//     const {id} = useParams();

//     // useEffect(()=>{
//     //     if(!!champions) {
//     //         let selectedChampion = champions.find((champion) => champion.id === Number(id))
//     //         setChampions({...selectedChampion})
//     //     }
//     // }, [setChampions, id, champions])

//     const [formData, setFormData] = useState({
//         name: "",
//         description: "",
//     });
    
//     function handleSubmit(e) {
//         e.preventDefault()
//         fetch(`/abilities/${id}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 description
//             }),
//             }).then((r) => {
//               if (r.ok) {
//                 navigate(`/champions/${id}`)
//               } else {
//                 r.json().then((err) =>
//                   setAbility({ data: ability, errors: err.errors, status: "rejected" })
//                 );
//               }
//             });
//       };

//     function handleChange(event){
//         if(event.target.value === ""){
//             setFormData({name: "Unkown ability", description: "No description given"})
//         }
//         setFormData({...formData, [event.target.id] : event.target.value});
//     };  
          
//   return (
//     <form onSubmit={handleSubmit}>
//         <input id="name" type="text" placeholder="Enter ability name" onChange={handleChange} value={formData.name}/>
//         <textarea id="description" type="text" placeholder="Enter ability description..." onChange={handleChange} value={formData.description}/>
//         <button type="submit"> Add Ability </button> 
//     </form>
//     )
// };
// export default AbilityCreateForm;
