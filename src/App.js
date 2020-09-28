import React from 'react';
//Components
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.scss'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/form' exact  component={LandingPage} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
