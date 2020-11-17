import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import WelcomeHomePage from "./pages/WelcomeHomePage";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import Feed from "./pages/Feed";
import UserProfile from './userProfile/UserProfile'
import SignUp from './components/Signup';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <HeaderComponent />
          <Switch>
            {/* <Feed /> */}
            home feed explore
            {/* <WelcomeHomePage /> */}
            {/* <SignupPage /> */}
            {/* <LoginPage /> */}
            <Route path="/" exact component={WelcomeHomePage} />
            <Route path="/feed" exact component={Feed} />
            <Route path="/user" exact component={UserProfile} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={Login} />

          </Switch> 
          <FooterComponent />
        </>
      </Router>
   );
  }
}

export default App;
