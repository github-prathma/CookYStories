import React, { Component } from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../css/CookStories.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeHomePage from "./WelcomeHomePage";
import SignupPage from "./SignupPage";
import Feed from "../userFeed/Feed";

class CookYStories extends Component {
  render() {
    return (
      <Router>
        <>
          <HeaderComponent />
          <Switch>
            {/* home */}
            {/* feed */}
            {/* explore */}
            {/* <WelcomeHomePage /> */}
            <SignupPage />
            <Route path="/feed" exact component={Feed} />
          </Switch>
          <FooterComponent />
        </>
      </Router>
    );
  }
}
export default CookYStories;
