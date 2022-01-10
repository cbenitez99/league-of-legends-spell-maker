import { Route, Switch } from 'react-router-dom';
import {useState, useEffect} from "react"
import SignupForm from './components/SignupForm';
import Navbar from "./components/Navbar";
import ChampionAbilityForm from "./components/ChampionAbilityForm";
import AbilityEditForm from "./components/AbilityEditForm"
import Ability from "./components/Ability"
import Champion from "./components/Champion"
import Home from "./components/Home"




function App() {
  
  const [champions, setChampions] = useState([])
  const [abilities, setAbilities] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    fetch("/champions")
      .then((r) => r.json())
      .then((data) => {
        setChampions(data)
      });
  }, []);


  // useEffect(() => {
  //   fetch('/abilities')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setAbilities(data)
  //     })
  // }, []);

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

          <Route exact path="/signup">
            <SignupForm/>
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
