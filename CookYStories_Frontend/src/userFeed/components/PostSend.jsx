import { Avatar, Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import { Component } from 'react'
import AddPost from './AddPost'
import rushang from '../../utils/Images/rushang.PNG'
import addimage from '../../utils/Images/Addimage.png'
import '../css/PostSend.css'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import SaveIcon from '@material-ui/icons/Save';
import {Mutation} from 'react-apollo'
import {CREATE_POST} from '../../backend/FeedApis'
import AuthenticationService from '../../backend/AuthenticationService'
import { Route , withRouter} from 'react-router-dom';




class PostSend extends Component {    
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
        
        this.state = {
            // input: "",
            // imgUrl: "",
            modal: false,
            description: "",
            modalInputDescription: ""
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
        return (
           <Mutation mutation={CREATE_POST} variables={{byUsername:AuthenticationService.getLoggedInUser(), description:this.state.description}} >
            {
              (createPostClicked, {loading, error, data}) => {
                if(loading) {
                  return(
                  <span>Loading ... </span>
                  )}
                if(error) {
                  return(
                  <span>Error ... </span> 
                  )}
  
                if (data) {
                  console.log(data)
                  // this.props.history.push(`/feed/${AuthenticationService.getLoggedInUser()}`)
                }

                return (
                  <div className='postSend'>
                    <AddPost show={this.state.modal} handleClose={e => this.modalClose(e)}>
                      <form className="form-group">
                        <Grid container spacing={2}>
                          <Grid item>
                            <div className='EditImage'>
                              <img src={addimage} className="addIcon" alt="img" />
                            </div>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid item xs>
                                <div className="form-group">
                                  <Typography variant="h6">How to Cook!</Typography>
                                  <br />
                                </div>
                                <div className="form-group">
                                  <textarea
                                    type="text"
                                    value={this.state.description}
                                    name="description"
                                    onChange={e => this.handleChange(e)}
                                    className="form-control"
                                    placeholder="Enter your way to cook!"
                                    style={{height: '200px'}}
                                  />       
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </form>
                      <form>
                        <div className="button">
                          <Button
                            variant="contained"
                            color="primary"                  
                            startIcon={<SaveIcon />}
                            onClick={e => {
                              this.handleSubmit(e)
                                createPostClicked({variables:{description: this.state.description, byUsername:AuthenticationService.getLoggedInUser()}})
                                
                              }
                            } >
                                  Post
                          </Button>
                        </div>
                      </form>      
                    </AddPost>
                    <div className='postSend_top' onClick={e => this.modalOpen(e)}>
                      <Avatar src={rushang} className="user_avatar"/>
                        <form>
                          <input
                            value={this.props.input}
                            // onChange={(e) => this.setInput(e.target.value)}
                            className='postSend_input'
                            placeholder={'What are you coooking today?'} 
                          />
                          <div className="postSend_option">
                            <PhotoLibraryIcon style={{ color: 'green' }}/>
                            <h3>Photo/Video</h3>
                          </div>
                        </form>
                    </div>
                  </div>
                );
              }
            }
          </Mutation> 
        )
    }



//     handleSubmit = (event) => {
//         event.preventDefault();

//         this.setInput('')
//         this.setImgUrl('')
//     }

//     setInput = () => {
//         this.setState = {
//             input : "",
//             imgUrl : ""
//         }
//     }
 }


 export default withRouter(PostSend)