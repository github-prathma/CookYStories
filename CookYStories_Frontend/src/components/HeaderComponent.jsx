import logo from '../CookYLogo.png'
import '../css/CookStories.css'
import React, { Component } from 'react';
import { Avatar, Button, IconButton } from '@material-ui/core'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import rushang from '../Images/rushang.PNG'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import AddIcon from '@material-ui/icons/Add'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/Header.css'
import AuthenticationService from '../backend/AuthenticationService'
import { withRouter } from 'react-router';


class HeaderComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        username: "",
        isLoginClicked: false
      };
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;

        return (
            <div className="header">
      <div className="header_left">
        <img src={logo} alt='Logo' />
        {isLoggedIn && <div className="header_input">
          <SearchIcon />
          <input placeholder='Search CookYStory'
            type='text' />
        </div>}

      </div>
      
      {isLoggedIn &&<div className="header_middle">
       <div className="header_option header_option--active">
          <HomeIcon fontSize='large' onClick={this.onHomeClick} />
        </div>
         <div className="header_option">
          <FlagIcon fontSize='large' />
        </div>

      </div>}
       <div className="header_right">
       {isLoggedIn &&<div className="header_info">
          <Avatar src={rushang}/>
          <h4>rushang2413</h4>
        </div>}

        {!isLoggedIn && !this.state.isLoginClicked && <div className="account">
        <Button fullWidth variant="contained" onClick={this.loginClicked}>
            <AccountCircleIcon />
            <span className="tab">Sign In / Create Account </span>
          </Button>
        </div>}
        
        {isLoggedIn && <div>
           <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <NotificationActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        </div>}

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
    loginClicked = (event) => {
      this.setState({
        isLoginClicked : true
      });
      this.props.history.push('/login');
      
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