import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [champions, setChampions] = useState([]);

    useEffect(()=> {
        fetch("/champions")
        .then((response) => response.json())
        .then((data) => setChampions(data));
    }, []);

    return (
        <div>
            <h2>Select Your Champion!</h2>
            <ul>
                {champions.map((champion)=>(
                    <li key={champion.id}>
                        {/* <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90&width=250"></img> */}
                        <Link to={`/champions/${champion.id}`}>{champion.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;