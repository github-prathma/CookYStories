import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css'
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import WelcomeHomePage from "./pages/WelcomeHomePage";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import Feed from "./pages/Feed";

=======
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import CookYStories from './mainapp/CookYStories'
>>>>>>> d34d68f53acb26456027a716e3417c9d36a1ec61

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
