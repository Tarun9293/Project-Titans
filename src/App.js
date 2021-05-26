
import './App.css';
import NavBar from './appBar'
import WorldCup from './WorldCup'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
         <Route path="/questions/worldCup">
            <WorldCup />
          </Route> 
          </Switch>
      </div>
  </Router>
  );
}

export default App;
