
import './App.css';
import NavBar from './appBar'
import WorldCup from './components/WorldCup/WorldCup'
import Home from './components/Home/Home'
import General from './components/General/General'
import NavDrawer from './components/NavDrawer'
import store from './redux/store'


import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import React from 'react';
import {Provider} from 'react-redux'
function App() {

  return (
    <Provider store ={store}>
    <Router>
      <React.Fragment>
     
      <div className="App">
      <NavDrawer/>
        <Switch>
          <Route exact path="/Home">
            <Home />
            </Route>
          <Route path="/General">
            <General />
          </Route> 
         <Route path="/worldCup">
            <WorldCup />
          </Route> 
          </Switch>
      </div>
      </React.Fragment>
  </Router>
  </Provider>
  );
}

export default App;
