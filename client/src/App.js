import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ChampionAbilityForm from "./components/ChampionAbilityForm";
import AbilityEditForm from "./components/AbilityEditForm"
import Ability from "./components/Ability"
import Champion from "./components/Champion"
import Home from "./components/Home"
import {useState, useEffect} from "react"



function App() {
  
  const [champions, setChampions] = useState([])
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    fetch('/abilities')
      .then((r) => r.json())
      .then((data) => {
        setAbilities(data)
      })
  }, []);

  useEffect(() => {
    fetch("/champions")
      .then((r) => r.json())
      .then((data) => {
        setChampions(data)
      });
  }, []);
  // const [champion, setChampion] = useState([])
  // const {id} = useParams()

  // useEffect(()=>{
  //     if(!!champions) {
  //         let selectedChampion = champions.filter((champion) => champion.id === Number(id))
  //         setChampion({...selectedChampion})
  //     }
  // }, [id, setChampion, champions])

  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/champion_abilities/new">
            {/* <ChampionAbilityForm abilities={abilities}/> */}
          </Route>

          <Route exact path="/champions/:id/edit">
            <AbilityEditForm/>
          </Route>

          <Route exact path="/champions/:id">
            <Ability champions={champions}/>
          </Route>

          <Route exact path="/champions">
            <Champion champions={champions}/>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
