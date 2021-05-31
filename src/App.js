
import './App.css';
import NavBar from './appBar'
import WorldCup from './components/WorldCup/WorldCup'
import Home from './components/Home/Home'
import General from './components/General/General'
import NavDrawer from './components/NavDrawer'

import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
function App() {

  return (
    <Router>
      <div className="App">
        <NavDrawer />
        <Switch>
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route path="/General">
            <General />
          </Route> 
         <Route path="/worldCup">
            <WorldCup />
          </Route> 
          </Switch>
      </div>
  </Router>
  );
}

export default App;
