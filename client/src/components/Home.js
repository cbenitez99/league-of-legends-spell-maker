import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [champions, setChampions] = useState([]);

    useEffect(()=> {
        fetch("/champions")
        .then((r) => r.json())
        .then(setChampions);
    }, []);

    return (
        <div>
            <h2>Champion List</h2>
            <ul>
                {/* map champs */}
            </ul>
        </div>
    );
}

export default Home;