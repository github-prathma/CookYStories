import React, { Component } from 'react'
import rushang from '../Images/rushang.PNG'
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import '../css/userprofile-css/ProfileHeader.css'
import EditProfile from './EditProfile'
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class ProfileHeader extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);

    this.state = {
      modal: false,
      name: "",
      first_name: "",
      last_name: "",
      user_name: "",
      city: "",
      country: "",
      bio: "",

      modalInputName: ""
    };
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
    const { first_name, last_name, user_name, city, country, bio } = this.state;
    this.setState({ name: this.state.modalInputName });
    console.log("First Name: " + first_name);
    console.log("Last Name: " + last_name);
    console.log("User Name: " + user_name);
    console.log("City: " + city);
    console.log("Country: " + country);
    console.log("Bio: " + bio);
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
    return (      
      <div className='userProfile'>
        <div className='profileImage'>
          <img src={rushang} />
        </div>
        <div className='profileBio'>
          <h4>Rushang Shah
          <Button className="editProfile" onClick={e => this.modalOpen(e)} variant="contained"
            color="default" startIcon={<CreateIcon />} style={{marginLeft: '900px'}}>Edit Profile</Button>
            <EditProfile show={this.state.modal} handleClose={e => this.modalClose(e)}>
              <form className="form-group">
              <div className='EditImage'>
          <img src={rushang} />
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
                <div className="form-group">
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
                </div>
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
                  <label style={{marginLeft:'10px'}}>Contry:</label>
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
                  placeholder="Hello Everyone"
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
            </EditProfile></h4>
          <div className='profileData'>
            <h5>rushang2413</h5>
            <h5>Hello Everyone!!!!!!!!!</h5>
            <h5>Syracuse, USA</h5>
            <h5>My Website..!!</h5>
          </div>

        </div>
        
        </div> 
    )
  }
}
