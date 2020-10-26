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
import RegisterPage from './Containers/RegisterPage'
import PrivateRoute from './Containers/PrivateRoute'
import { connect } from 'react-redux'

const App = ({isLogged}) => {
  return (
    <div style={{position: 'relative'}}>
      <Router>
      <Navbar isLogged={isLogged}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute path="/init" exact component={LandingPage} />
          <PrivateRoute path='/form' exact component={FormLanding}/>
          <PrivateRoute path="/myforms" exact component={FormTable}/>
          <Route path="/login" exact component={isLogged ? LandingPage : LoginPage} />
          <Route path="/register" exact component={isLogged ? LandingPage : RegisterPage} />
          <Route component={Error404}/>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLogged: (state.user ? state.user : undefined)
  }
}

export default connect(mapStateToProps, null)(App);
