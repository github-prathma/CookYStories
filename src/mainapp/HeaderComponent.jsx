import logo from './CookYLogo.png'
import './CookYStories.css'
import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-header">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src={logo}/>
                        </a>
                    </div>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {/* TODO if else for login / logout */}
                        <li>Login</li> 
                        <li>Logout</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;