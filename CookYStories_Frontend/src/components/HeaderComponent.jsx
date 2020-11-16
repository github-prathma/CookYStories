import logo from '../CookYLogo.png'
import '../css/CookStories.css'
import React, { Component } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import rushang from '../Images/rushang.PNG'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import AddIcon from '@material-ui/icons/Add'
import '../css/Header.css'
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
//import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router';


class HeaderComponent extends Component {

    // constructor(props) {
    //     this.state = {
    //         renderFeed : false
    //     }
    // }
    render() {
        return (
            <div className="header">
      <div className="header_left">
        <img src={logo} alt='Logo' /> 
        <div className="header_input">
          <SearchIcon />
          <input placeholder='Search CookYStory'
            type='text' />
        </div>

      </div>  
      
      <div className="header_middle">
        <div className="header_option header_option--active">
          <HomeIcon fontSize='large' onClick={this.onHomeClick}/>
        </div>
        <div className="header_option">
          <FlagIcon fontSize='large' />
        </div>

      </div>
      <div className="header_right">{!(sessionStorage.logged === null) &&
        <div className="header_info">
          <Avatar src={rushang}/>
          <h4>rushang2413</h4>
        </div>}

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <NotificationActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
            // <header>
            //     <nav className="navbar navbar-expand-md navbar-dark bg-header">
            //         <div>
            //             <a className="navbar-brand" href="#">
            //                 <img src={logo}/>
            //             </a>
            //         </div>
            //         <ul className="navbar-nav navbar-collapse justify-content-end">
            //             {/* TODO if else for login / logout */}
            //             <li>Login</li> 
            //             <li>Logout</li>
            //         </ul>
            //     </nav>
            // </header>
        );
    }

    onHomeClick = (event) => {
        console.log("home button click")
        // this.setState = {
        //     renderFeed : true
        // }
        // this.props.history.push('/feed')
    }
}

export default withRouter(HeaderComponent);