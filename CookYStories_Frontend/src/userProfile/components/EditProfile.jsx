//import { Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import React, { Component,  useCallback } from 'react'
import '../css/EditProfile.css'
import SaveIcon from '@material-ui/icons/Save';
import {UPDATE_USER_INFO} from '../../backend/UserProfileApis'
import { Mutation } from 'react-apollo'
import CircularProgress from '@material-ui/core/CircularProgress';

class EditProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        first_name: props.user.first_name,
        last_name: props.user.last_name,
        city: props.user.city,
        country: props.user.country,
        bio: props.user.bio,
      },
      profileImageUrl: props.profileImageUrl,
      user_name: props.user_name,
      dataReceived:false
    };
  }

  handleChange = event => {
    this.setState({
      user: {
        [event.target.name]: event.target.value
      }
    });
  }

  onDataUpdate = (param) => {
    this.props.onUserChange(param)
  }

 render() {
  let showHideClassName = this.props.show ? " modal d-block" : 'modal d-none';

  // if (this.props.show) {
  //   this.setState({
  //     openModal:true
  //   })
  // } else {
  //   this.setState({
  //     openModal:false
  //   })
  // }
  return (
    

<Mutation mutation={UPDATE_USER_INFO} variables={
        {
            username: this.state.user_name, 
            firstName: this.state.user.first_name, 
            lastName: this.state.user.last_name, 
            city: this.state.user.city, 
            country: this.state.user.country, 
            bio: this.state.user.bio,
            profileImageUrl: this.state.profileImageUrl
        }}> 
{
  (onUpdateClick, {loading, error, data}) => {

        if (loading) {
         
        }

        if (error) {
          
        } 
        if (data && !this.state.dataReceived) {
          this.setState(
            {
              dataReceived:true,
            }
          )
          console.log(data)
          const updatedUser = data.updateUser
          this.onDataUpdate(updatedUser)
        }
        return (
          <div className={showHideClassName}>
          <div className="modal-container">
              <form className="form-group">
                  <div className='EditImage'>
                      <img src={this.state.profileImageUrl} alt="img"/>
                  </div>
                  <ul>
                      <div className="form-group">
                          <label >First name:</label>
                          <input
                            type="text"
                            value={this.state.user.first_name}
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
                            value={this.state.user.last_name}
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
                            value={this.state.user.city}
                            name="city"
                            onChange={e => this.handleChange(e)}
                            className="form-control"
                            placeholder="Syracuse"
                            style={{display: 'flex'}}
                          />
                          <label style={{marginLeft:'10px'}}>Country:</label>
                          <input
                            type="text"
                            value={this.state.user.country}
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
                              value={this.state.user.bio}
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
                      onClick={e => {
                        onUpdateClick({variables: {
                          username: this.state.user_name, 
                          firstName: this.state.user.first_name, 
                          lastName: this.state.user.last_name, 
                          city: this.state.user.city, 
                          country: this.state.user.country, 
                          bio: this.state.user.bio,
                          profileImageUrl: this.state.profileImageUrl
                          }
                        });
                        }} >
                      Update
                    </Button>
                  </div>
                  <div className="button">
                    <Button
                      variant="contained"
                      color="secondary"
                      className='modal-close'
                      onClick={this.props.handleClose}
                      startIcon={<DeleteIcon />}>
                      Cancel
                    </Button>
                  </div>
                </form>        
            </div>
      </div>
          
        )
  }
}
</Mutation>   
  )
  }
}
export default EditProfile;