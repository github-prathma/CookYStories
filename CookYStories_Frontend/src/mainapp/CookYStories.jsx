import React, { Component } from "react";
//import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../css/CookStories.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeHomePage from "./WelcomeHomePage";
import SignupPage from "./SignupPage";
//import LoginPage from "./LoginPage";
import Feed from "../userFeed/Feed";
import UserProfile from "../userProfile/UserProfile";

class CookYStories extends Component {
  render() {
    return (
      <Router>
        <>
          <HeaderComponent />
          <Switch>
            home feed explore
            {/*<SignupPage />*/}
            {/* <LoginPage /> */}
            <Route path='/' exact component={WelcomeHomePage} />
            <Route path='/signup' exact component={SignupPage} />
            <Route path="/feed" exact component={Feed} />
            <Route path="/user" exact component={UserProfile} />
          </Switch>
          <FooterComponent />
        </>
      </Router>
    );
  }
}
export default CookYStories;
