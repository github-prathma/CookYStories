import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './CookYStories.css'
import HeaderComponent from './HeaderComponent'

class CookYStories extends Component {
    render() {
        return (
                <Router>
                <>
                    <HeaderComponent/>
                </>
                </Router> 
        );
    }
}



export default CookYStories;