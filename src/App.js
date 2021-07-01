
import './App.css';
import WorldCup from './components/WorldCup/WorldCup'
import Home from './components/Home/Home'
import General from './components/General/General'
import Play from './components/Play/Play'
import Login from './components/Login/Login'
import NavDrawer from './components/NavDrawer'
import store from './redux/store'


import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import React from 'react';
import {Provider} from 'react-redux'
import Results from './components/Results/Results';
function App() {

  return (
    <Provider store={store}>
      <Router>      
          <div className="App">
            {/* <NavDrawer /> */}
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Play">
                <Play />
              </Route>
              <Route path="/General">
                <General />
              </Route>
              <Route path="/worldCup">
                <WorldCup />
              </Route>
              <Route path="/results">
                <Results />
              </Route>
            </Switch>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
