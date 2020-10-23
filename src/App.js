import React from 'react';
import './app.scss'
//Components
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'
import Footer from './Components/Footer'
import FormLanding from './Containers/FormLanding'
import FormTable from './Containers/FormTable'
import { Navbar } from './Components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error404 from './Containers/Error404'
import LoginPage from './Containers/LoginPage'


const App = ( { isLogged } ) => {
  return (
    <div style={{position: 'relative'}}>
      <Router>
      <Navbar showButton={false} isAunthenticate={false}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/init" exact component={isLogged ? LandingPage: LoginPage} />
          <Route path='/form' exact component={isLogged ? FormLanding : LoginPage}/>
          <Route path="/myforms" exact component={isLogged ? FormTable : LoginPage}/>
          <Route path="/login" exact component={LoginPage}></Route>
          <Route component={Error404}/>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}



export default App;
