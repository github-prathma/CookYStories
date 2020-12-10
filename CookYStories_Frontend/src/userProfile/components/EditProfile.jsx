//import { Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import React, { Component,  useCallback } from 'react'
import '../css/EditProfile.css'
import SaveIcon from '@material-ui/icons/Save';

//children
class EditProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        first_name: props.firstName,
        last_name: props.lastName,
        user_name: props.username,
        city: props.city,
        country: props.country,
        bio: props.bio,
        profileImageUrl: props.profileImageUrl
      }
    };
  }

  componentWillReceiveProps(props) {

    this.setState({
      user: {
        first_name: props.firstName,
        last_name: props.lastName,
        user_name: props.username,
        city: props.city,
        country: props.country,
        bio: props.bio,
        profileImageUrl: props.profileImageUrl
      }
    })
  }

  handleChange = event => {
    this.props.onUserChange(event)
  }

  
 render() {
  let showHideClassName = this.props.show ? " modal d-block" : 'modal d-none';

  return (
    <div className={showHideClassName}>
        <div className="modal-container">
            <form className="form-group">
                <div className='EditImage'>
                    <img src={this.state.user.profileImageUrl} alt="img"/>
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
                    onClick={this.props.handleUpdate} >
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
export default EditProfile;