import { Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import ChampionAbilityForm from "./components/ChampionAbilityForm";
import AbilityEditForm from "./components/AbilityEditForm"
import Ability from "./components/Ability"
import Champion from "./components/Champion"
import Home from "./components/Home"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/champion_abilities/new">
            <ChampionAbilityForm />
          </Route>
          <Route exact path="/abilities/:id/edit">
            <AbilityEditForm />
          </Route>
          <Route exact path="/abilities/:id">
            <Ability />
          </Route>
          <Route exact path="/champions/:id">
            <Champion />
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
