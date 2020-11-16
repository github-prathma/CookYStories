import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import WelcomeHomePage from "./pages/WelcomeHomePage";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import Feed from "./pages/Feed";


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <HeaderComponent />
          <Switch>
            <Feed />
            home feed explore
            {/* <WelcomeHomePage /> */}
            {/* <SignupPage /> */}
            {/* <LoginPage /> */}
            {/* <Route path="/feed" exact component={Feed} /> */}
          </Switch> 
          <FooterComponent />
        </>
      </Router>
   );
  }
}

export default App;
