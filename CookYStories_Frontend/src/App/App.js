import React, { Component } from 'react';
import './css/App.css';
import './css/bootstrap.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeHomePage from "../welcome_home/pages/WelcomeHomePage";
import Header from "../mainapp/components/Header"
import Footer from "../mainapp/components/Footer"
import Signup from "../welcome_home/components/Signup"
import Login from "../welcome_home/components/Login"
import Feed from "../userFeed/pages/Feed";
import UserProfile from "../userProfile/pages/UserProfile"
import AuthenticatedRoute from '../utils/AuthenticatedRoute'


class App extends Component {
  
 
  render() {
    return (
      <Router>
        <>
          <Header/>
          <Switch>
            <Route path="/" exact component={WelcomeHomePage} />
            <AuthenticatedRoute path="/feed/:name" exact component={Feed} />
            <AuthenticatedRoute path="/user" exact component={UserProfile} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />

          </Switch> 
          {/* <Footer /> */}
        </>
      </Router>
   );
  }
}

export default App;
