import React, { Component } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import '../css/ProfileHeader.css'
import EditProfile from '../components/EditProfile'
import Button from '@material-ui/core/Button';
import chefAvatar from '../../utils/Images/chefAvatar.jpg'
import AuthenticationService from '../../backend/AuthenticationService.js'

import ErrorIcon from '@material-ui/icons/Error';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import CheckIcon from '@material-ui/icons/Check';


export default class ProfileHeader extends Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);

    this.state = {
      modal: false, //to show modal or not
      name: "",
      userData: {
        first_name: props.firstName,
        last_name: props.lastName,
        user_name: props.username,
        city: props.city,
        country: props.country,
        bio: props.bio,
        profileImageUrl: props.profileImageUrl
      },
      isFollowed: props.isFollowed
    };
  }

  componentWillReceiveProps(props) {
    this.setState(
      {
        userData: {
          first_name: props.firstName,
          last_name: props.lastName,
          user_name: props.username,
          city: props.city,
          country: props.country,
          bio: props.bio,
          profileImageUrl: props.profileImageUrl
        },
        isFollowed: props.isFollowed
      }
    )
  }

  onUserChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUpdate(e) {
    // const { first_name, last_name, user_name, city, country, bio } = this.state;
    // this.setState({ name: this.state.modalInputName });
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
    let imageUrl

    if (this.state.userData.profileImageUrl != null && this.state.userData.profileImageUrl != "") {
      imageUrl = this.state.userData.profileImageUrl
    } else {
      imageUrl = {chefAvatar}
    }

    return (      
        <div className='userProfile'>
                <div className='profileImage'>
                    <img src={imageUrl} alt="Img"/>
                </div>
                <div className='profileBio'>
                    <h4>{this.state.userData.first_name} {this.state.userData.first_name}</h4>
                    <div className='profileData'>
                        <h5>{this.state.userData.user_name}</h5>
                        <h5>{this.state.userData.bio}</h5>
                        <h5>{this.state.userData.city}, {this.state.userData.country}</h5>
                    </div>
                    {this.state.userData.user_name != AuthenticationService.getLoggedInUser() && 
                        <>
                          {this.state.isFollowed && 
                            <Button variant="contained" style={{ color: "green" }} endIcon={<TrendingUpIcon />} style={{ marginLeft: '900px' }}>Unfollow</Button>
                          }
                          {!this.state.isFollowed && 
                            <Button variant="contained" color="primary" endIcon={<TrendingUpIcon />} style={{ marginLeft: '900px' }}>Follow</Button>
                          }
                          <ErrorIcon style={{ fill: "red" }}/>
                      
                        </>
                    }
          
                    { this.state.userData.user_name == AuthenticationService.getLoggedInUser() &&
                          <Button className="editProfile" onClick={e => this.modalOpen(e)} variant="contained"
                          startIcon={<CreateIcon />}>Edit Profile</Button>
                    }
            
          
                    <EditProfile show={this.state.modal} onUserChange={(e) => this.onUserChange(e)} handleUpdate={e => this.handleUpdate(e)}  handleClose={e => this.modalClose(e)} user={this.state.userData}/>         

                </div>
        
         </div> 
    )
  }
}
