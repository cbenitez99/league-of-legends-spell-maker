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




export default function App() {
  
  const [champions, setChampions] = useState([])
  // const [abilities, setAbilities] = useState([]);
  const [user, setUser] = useState({})


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
          <Navbar user={user} onLogout={setUser}/>
            <main>
              <Routes>
                <Route path="/users/:id/abilities" element={<AbilityCreateForm />}></Route>
                <Route path="/champions/:id/edit" element={<AbilityEditForm />}></Route>
                <Route path="/champions/:id" element={<Ability champions={champions}/>}></Route>
                <Route path="/champions" element={<Champion champions={champions}/>}></Route>
                <Route path="/login" element={<LoginForm setUser={setUser}/>}></Route>
                <Route path="/signup" element={<SignupForm setUser={setUser}/>}></Route>
                <Route path="/" element={<Home />} ></Route>
              </Routes>
            </main>
      </div>
    )
}

