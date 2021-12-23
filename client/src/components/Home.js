import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [champions, setChampions] = useState([]);

    useEffect(()=> {
        fetch("/champions")
        .then((response) => response.json())
        .then(setChampions);
    }, []);

    return (
        <div>
            <h2>Select a Champion</h2>
            <ul>
                {champions.map((champion)=>(
                    <li key={champion.id}>
                        <Link to={`/champions/${champion.id}`}>{champion.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;