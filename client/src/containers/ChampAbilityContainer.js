import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Ability from '../components/Ability'
//pass a prop to see ability stats
function ChampAbilityContainer({champions, setAbilities}) {
    const [champion, setChampion] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        if(!!champions) {
            let selectedChampion = champions.find((champion) => champion.id === Number(id))
            setChampion({...selectedChampion})
        }
    }, [setChampion, id, champions])
    
    return ( 
        <div>
            <Ability champion={champion} setAbilities={setAbilities} />
        </div>        
    )
}
export default ChampAbilityContainer;
