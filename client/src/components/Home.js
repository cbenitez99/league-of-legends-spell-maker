import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [champions, setChampions] = useState([]);

    useEffect(()=> {
        fetch("/champions")
        .then((res) => res.json())
        .then(setChampions);
    }, []);

    return (
        <div>
            <h2>Champion List</h2>
            <ul>
                {champions.map((champion)=>(
                    <div>
                        <Link to='/'>{champion.name}</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Home;