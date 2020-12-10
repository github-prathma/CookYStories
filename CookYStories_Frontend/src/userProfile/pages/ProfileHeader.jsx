import React, { Component } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import '../css/ProfileHeader.css'
import EditProfile from '../components/EditProfile'
import Button from '@material-ui/core/Button';
import chefAvatar from '../../utils/Images/chefAvatar.jpg'
import AuthenticationService from '../../backend/AuthenticationService.js'

import ErrorIcon from '@material-ui/icons/Error';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckIcon from '@material-ui/icons/Check';

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);

    this.state = {
      modal: false,
      name: "",
      first_name: props.firstName,
      last_name: props.lastName,
      user_name: props.username,
      city: props.city,
      country: props.country,
      bio: props.bio,
      modalInputName: "",
      isFollowed: props.isFollowed
    };
  }

  componentWillReceiveProps(props) {
    this.setState(
      {
        first_name: props.firstName,
        last_name: props.lastName,
        user_name: props.username,
        city: props.city,
        country: props.country,
        bio: props.bio,
        isFollowed: props.isFollowed
      }
    )
  }

  handleChange(e) {
    // const target = e.target;
    // const name = target.name;
    // const value = target.value;

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    // const { first_name, last_name, user_name, city, country, bio } = this.state;
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      // modalInputName: "",
      modal: false
    });
  }

  
  render() {
    let imageUrl

    if (this.props.profileImageUrl != null && this.props.profileImageUrl != "") {
      imageUrl = this.props.profileImageUrl
    } else {
      imageUrl = {chefAvatar}
    }

    return (      
      <div className='userProfile'>
        <div className='profileImage'>
          <img src={imageUrl} alt="Img"/>
        </div>
        <div className='profileBio'>
          <h4>{this.props.firstName} {this.props.lastName}</h4>
            <div className='profileData'>
              <h5>{this.props.username}</h5>
              <h5>{this.props.bio}</h5>
              <h5>{this.props.city}, {this.props.country}</h5>
            </div>
            {this.state.user_name != AuthenticationService.getLoggedInUser() && 
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
          
          { this.state.user_name == AuthenticationService.getLoggedInUser() &&
                <Button className="editProfile" onClick={e => this.modalOpen(e)} variant="contained"
                startIcon={<CreateIcon />}>Edit Profile</Button>
          }
            
          
            <EditProfile show={this.state.modal} handleClose={e => this.modalClose(e)}>
              <form className="form-group">
              <div className='EditImage'>
               <img src={this.props.profileImageUrl} alt="img"/>
                </div>
                <ul>
                <div className="form-group">
                  <label >First name:</label>
                  <input
                    type="text"
                    value={this.state.first_name}
                    name="first_name"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                    placeholder="Rushang"
                    style={{ display: 'flex' }} />             
                </div>
                <div className="form-group">
                  <label>Last name:</label>
                  <input
                    type="text"
                    value={this.state.last_name}
                    name="last_name"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                    placeholder="Shah"
                    style={{display: 'flex'}}
                      />
                </div>
                {/* <div className="form-group">
                  <label>User name:</label>
                  <input
                    type="text"
                    value={this.state.user_name}
                    name="user_name"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                    placeholder="rushang2413"
                    style={{display: 'flex'}}
                      />
                </div> */}
                <div className="form-group">
                  <label>City:</label>
                  <input
                    type="text"
                    value={this.state.city}
                    name="city"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                    placeholder="Syracuse"
                    style={{display: 'flex'}}
                        />
                  <label style={{marginLeft:'10px'}}>Country:</label>
                  <input
                    type="text"
                    value={this.state.country}
                    name="country"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                    placeholder="USA"
                    style={{marginLeft: '5px'}}
                      />
                </div>
                <div className="form-group">
                <label>Bio:</label>
                <textarea
                  type="text"
                  value={this.state.bio}
                  name="bio"
                  onChange={e => this.handleChange(e)}
                  className="form-control"
                  placeholder="Hello Everyone!!!!!!!!!"
                  style={{display: 'flex'}}
                    />
                  </div>  
                </ul>  
          </form>
              <form>
                <div className="button">
                    <Button
                      variant="contained"
                      color="primary"                  
                      startIcon={<SaveIcon />}
                      onClick={e => this.handleSubmit(e)} >
                    Update
            </Button>
                  </div>
          </form>
            </EditProfile>
         

        </div>
        
        </div> 
    )
  }
}
