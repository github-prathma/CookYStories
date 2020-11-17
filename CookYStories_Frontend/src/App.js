import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeHomePage from "./pages/WelcomeHomePage";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Feed from "./pages/Feed";
import UserProfile from "./userProfile/UserProfile"
import AuthenticatedRoute from './AuthenticatedRoute'


class App extends Component {
  
 
  render() {
    return (
      <Router>
        <>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={WelcomeHomePage} />
            <AuthenticatedRoute path="/feed/:name" exact component={Feed} />
            <AuthenticatedRoute path="/user" exact component={UserProfile} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />

          </Switch> 
          <FooterComponent />
        </>
      </Router>
   );
  }
}

export default App;
