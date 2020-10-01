import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './CookYStories.css'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent'
import WelcomeHomePage from './WelcomeHomePage'

class CookYStories extends Component {
    render() {
        return (
                <Router>
                <>
                    <HeaderComponent/>
                    <WelcomeHomePage/>
                    <FooterComponent/>
                </>
                </Router> 
        );
    }
}



export default CookYStories;