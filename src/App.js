import React from 'react';
import './app.scss'
//Components
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'
import Footer from './Components/Footer'
import FormLanding from './Containers/FormLanding'
import { Navbar } from './Components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error404 from './Containers/Error404'


function App() {
  return (
    <div style={{position: 'relative'}}>
      <Router>
      <Navbar showButton={false} isAunthenticate={true}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/init" exact component={LandingPage} />
          <Route path='/form' exact component={FormLanding}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
