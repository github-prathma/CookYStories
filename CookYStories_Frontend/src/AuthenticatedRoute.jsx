import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './backend/AuthenticationService'

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isLoggedIn){
            return <Route {...this.props} />
        }else {
            return <Redirect to = '/' />
        }
    }
}

export default AuthenticatedRoute;

