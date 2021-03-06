import logo from '../../utils/CookYLogo.png'
import '../../mainapp/css/CookStories.css'
import React, { Component } from 'react';
import { useEffect } from 'react';
import chefAvatar from '../../utils/Images/chefAvatar.jpg'
import { Avatar, Button } from '@material-ui/core'
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/Header.css'
import AuthenticationService from '../../backend/AuthenticationService'
import { withRouter } from 'react-router';
import {LOG_OUT} from '../../backend/AuthApis'
import { Mutation } from 'react-apollo'
import FastfoodIcon from '@material-ui/icons/Fastfood';

// import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import addimage from '../Images/Addimage.png'
// import AddIcon from '@material-ui/icons/Add'
// import SaveIcon from '@material-ui/icons/Save';
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
// import { AddPost } from '../../components/AddPost';


class Header extends Component {
  constructor(props) {
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
      profileImage: props.profileImage,
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

  render() {

        // return (
        //   <>
          
        //     <Mutation mutation={LOG_OUT} variables={{username: AuthenticationService.getLoggedInUser()}}>
        //     {
        //        (logOutUpdate, {loading, error, data}) => { 

        //           if (loading) { 
        //              return (
        //               console.log("loading") 
        //              )
        //           } 

        //           if (error) { 
        //              return ( 
        //               console.log("error")
        //               ) 
        //           }

        //            if (data) { 
        //              console.log('API call returned '+data)
        //             if (AuthenticationService.isLoggedIn()) { 
        //               console.log('Trying to clear Session Storage')
        //                  AuthenticationService.logout()
        //                  this.setState(
        //                    {
        //                     isLoginClicked: false
        //                    }
        //                  )
        //             }

        //            }
        let avatar;
        if (this.state.profileImage!=null && this.state.profileImage!="") {
          avatar = <Avatar src={this.state.profileImage}/>
        } else {
          avatar = <Avatar src={chefAvatar}/>

        }
                   
        return ( 
                      <div className="header">
                        <div className="header_left">
                            <img src={logo} alt='Logo' />
                            {AuthenticationService.isLoggedIn() && <div className="header_input">
                                <FindInPageRoundedIcon />
                                <input placeholder='Search CookYStory' type='text' />
                                </div>
                            }

                        </div>
      
                        {AuthenticationService.isLoggedIn() &&<div className="header_middle">
                            <div className="header_option header_option--active" onClick={(e) => this.onHomeClick(e)}>
                                <FastfoodIcon fontSize='large'/>
                            </div>
                            {/* <div className="header_option">
                                <FlagIcon fontSize='large' />
                            </div> */}
                        </div>}

                        <div className="header_right">
                            {AuthenticationService.isLoggedIn() && <div className="header_info" onClick={this.userNameClicked}>
                                {avatar}
                                <h5>{AuthenticationService.getLoggedInUser()}</h5>
                            </div>}

                            {AuthenticationService.isLoggedIn() && <div className="logout">
                              {/* onClick={e => {logOutUpdate({variables: {username: AuthenticationService.getLoggedInUser()}})}} */}
                                      <Button fullWidth variant="contained" onClick={e => {
                                        // logOutUpdate({variables: {username: AuthenticationService.getLoggedInUser()}});
                                      AuthenticationService.logout();
                                      this.props.history.push('/login');
                                    }} >
                                        <AccountCircleIcon />
                                        <span className="tab">Logout </span>
                                      </Button>
                            </div>} 
                        </div>

                            {!AuthenticationService.isLoggedIn() && !this.state.isLoginClicked && <div className="account"> 
                                      <Button fullWidth variant="contained" onClick={this.loginClicked}>
                                         <AccountCircleIcon />
                                          <span className="tab">Sign In/Create Account </span>
                                      </Button>
                             </div>}

                      </div>
          )
              
            
        //       }
        //     }
        //   </Mutation> 
        //   {/* } */}
        //   </>
        // )

      }

    loginClicked = (event) => {
      this.setState({
        isLoginClicked:true
      })
      this.props.history.push('/login');
      
    }

    userNameClicked = () => {
      this.props.history.push(`/user/${AuthenticationService.getLoggedInUser()}`)
    }


    onHomeClick = (event) => {
      this.props.history.push(`/feed/${AuthenticationService.getLoggedInUser()}`)
        // console.log("home button click")
    }
}

export default withRouter(Header);