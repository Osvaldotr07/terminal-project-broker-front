import React from 'react';
//Components
import Home from './Containers/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.scss'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
