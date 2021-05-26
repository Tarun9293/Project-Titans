
import Hello from './Hello';
import Message from './Message';
import SimpleCard from './CardQuestions';
import ConditionalRendering from './ConditionalRendering';
import Form from './Form';
import Counter from './Counter';
import Hover from './Hover';
import './App.css';
import NavBar from './appBar'
import WorldCup from './WorldCup'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
