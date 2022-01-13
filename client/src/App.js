import {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom";
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Navbar from "./components/Navbar";
import AbilityCreateForm from "./components/AbilityCreateForm";
import AbilityEditForm from "./components/AbilityEditForm"
import Ability from "./components/Ability"
import Champion from "./components/Champion"
import Home from "./components/Home"




function App() {
  
  const [champions, setChampions] = useState([])
  // const [abilities, setAbilities] = useState([]);
  const [user, setUser] = useState({})

  // useEffect(() => {
  //   fetch(`abilities`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setAbilities(data)
  //     })
  // }, []);

  useEffect(() => {
    fetch("/champions")
      .then((r) => r.json())
      .then((data) => {
        setChampions(data)
      });
  }, []);

    return (
      <div>
          <Navbar user={user} onLogout={setUser}/>
            <main>
              <Routes>
                <Route path="/champions/:id/new" element={<AbilityCreateForm champions={champions} setChampions={setChampions}/>}></Route>
                <Route exact path="/champions/:id/edit" element={<AbilityEditForm />}></Route>
                <Route exact path="/champions/:id" element={<Ability champions={champions}/>}></Route>
                <Route exact path="/champions" element={<Champion champions={champions}/>}></Route>
                <Route exact path="/login" element={<LoginForm setUser={setUser}/>}></Route>
                <Route exact path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
                <Route exact path="/" element={<Home/>} ></Route>
              </Routes>
            </main>
      </div>
    )
}

export default App;