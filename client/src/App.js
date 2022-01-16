import {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./containers/UsersContainer";
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Navbar from "./components/Navbar";
import AbilityCreateForm from "./components/AbilityCreateForm";
import AbilityEditForm from "./components/AbilityEditForm"
import Champion from "./components/Champion"
import Home from "./components/Home"
import ChampAbilityContainer from "./containers/ChampAbilityContainer";




function App() {
  
  const [champions, setChampions] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/champions")
      .then((r) => r.json())
      .then((data) => {
        setChampions(data)
      });
  }, []);

  let mappedChampion = champions.map((champAbility) => champAbility.id)

    return (
      <div>
          <Navbar user={user} setUser={setUser}/>
            <main>
              <Routes>
                <Route path="/champions/:id/abilities/new" element={<AbilityCreateForm champions={champions} setChampions={setChampions}/>}></Route>
                <Route exact path="/champions/:id/edit" element={<AbilityEditForm />}></Route>
                <Route exact path="/champions/:id" element={<ChampAbilityContainer user={user} mappedChampion={mappedChampion}/>}></Route>
                <Route exact path="/champions" element={<Champion champions={champions}/>}></Route>
                <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
                <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
                <Route exact path="/" element={<Home/>} ></Route>
                <Route exact path="users/*" element={<UsersContainer user={user}/>}/>
              </Routes>
            </main>
      </div>
    )
}

export default App;