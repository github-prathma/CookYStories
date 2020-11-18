import logo from '../../utils/CookYLogo.png'
import '../../mainapp/css/CookStories.css'
import React, { Component } from 'react';
import rushang from '../../utils/Images/rushang.PNG'
import { Avatar, Button } from '@material-ui/core'
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/Header.css'
import AuthenticationService from '../../backend/AuthenticationService'
import { withRouter } from 'react-router';
// import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import addimage from '../Images/Addimage.png'
// import AddIcon from '@material-ui/icons/Add'
// import SaveIcon from '@material-ui/icons/Save';
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
// import { AddPost } from '../../components/AddPost';


class Header extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    
    this.state = {
      modal: false,
      description: "",
      modalInputDescription: "",
      username: "",
      isLoginClicked: false
    };
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({ description: this.state.modalInputDescription });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modal: false
    });
  }

  userNameClicked = () => {
    this.props.history.push('/user')
  }

  render() {
      const isLoggedIn = AuthenticationService.isLoggedIn();

        return (
            <div className="header">
                <div className="header_left">
                  <img src={logo} alt='Logo' />
                  {isLoggedIn && <div className="header_input">
                    <FindInPageRoundedIcon />
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
                    {isLoggedIn && <div className="header_info" onClick={this.userNameClicked}>
                      <Avatar src={rushang}/>
                      <h5>rushang2413</h5>
                    </div>}

                    {isLoggedIn && <div className="logout">
                    <Button fullWidth variant="contained" onClick={this.logoutClicked}>
                        <AccountCircleIcon />
                        <span className="tab">Logout </span>
                      </Button>
                      </div>}
                      
                    </div>

              {!isLoggedIn && !this.state.isLoginClicked && <div className="account"> 
                    <Button fullWidth variant="contained" onClick={this.loginClicked}>
                        <AccountCircleIcon />
                        <span className="tab">Sign In/Create Account </span>
                      </Button>
                    </div>}
                    
              

                </div>

              
        );
    }

    loginClicked = (event) => {
      this.setState({
        isLoginClicked:true
      })
      this.props.history.push('/login');
      
    }


    onHomeClick = (event) => {
        console.log("home button click")
    }
}

export default withRouter(Header);