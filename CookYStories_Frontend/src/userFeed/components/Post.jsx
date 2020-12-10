import { Avatar, Button } from '@material-ui/core'
import React, {Component} from 'react'
import '../css/Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import {Mutation} from 'react-apollo'
import MenuItem from '@material-ui/core/MenuItem';
import {DELETE_POST, UPDATE_POST} from '../../backend/FeedApis'
import AuthenticationService from '../../backend/AuthenticationService';

class Post extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
        }

        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);


    }
    
    modalOpen() {
        this.setState({ modal: true });
    }
    
    modalClose() {
        this.setState({
            modal: false,
        });
    } 
    

    handleClick = event => this.setState({
        anchorEl: event.currentTarget
            })
    handleClose = () => this.setState({ anchorEl: null })

    openPost = event => {
        
    }

    shouldComponentUpdate(nextProps, nextState) { 
        if (nextProps.description === this.props.description) return false;
    
        return true;
      }
    
    
    render() {
        // console.log(this.props.id)
        // console.log(this.props.username)
        const sameUser =   (this.props.id === this.props.username )
        const { anchorEl } = this.state
        return (

           <>
                
            
            <div className='post' onClick = {this.openPost}>
                
                <div className="post_top">
                    <Avatar src={this.props.profilePic} className='post_avatar' />
                    <div className="post_topInfo">
                        <h3>{this.props.username}<MoreVertIcon style={{ marginLeft: "605px" }} onClick={this.handleClick} /><p>{this.props.createdAt}</p>
                                <Menu id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                    onClose={this.handleClose}>
                                    {sameUser ?  
                                    // <Mutation mutation={UPDATE_POST} variables={} >
                                    //     {
                                    //         (updatePostClicked, {loading, error, data}) => {
                                    //             if(loading) {
                                    //               return(
                                    //               <span>Loading ... </span>
                                    //               )}
                                    //             if(error) {
                                    //               return(
                                    //               <span>Error ... </span> 
                                    //               )}
                                  
                                    //             if (data) {
                                    //               console.log(data)
                                    //               console.log(this.props.post_id)
                                    //               this.setState({refresh:data.deletePost})
                                    //             }
                                    //             return (
                                                    <MenuItem onClick={(e) => {
                                                        this.handleClose();
                                                        // updatePostClicked( {variables :  {id:this.props.post_id, description: this.props.description, byUsername:this.props.byUsername}})
                                                    }}> Edit Post
                                                    </MenuItem>
                                    //             )
                                    //         }
                                    //     }
                                    // </Mutation>
                                      : <MenuItem >Report Post</MenuItem>}
                                        {sameUser ? 
                                        <Mutation mutation={DELETE_POST} variables={{post_id:this.props.post_id}}>
                                            {
                                                (deletePostClicked, {loading, error, data}) => {
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
                                                      console.log(this.props.post_id)
                                                      this.setState({refresh:data.deletePost})
                                                    }
                                                
                                                    return (
                                                        <MenuItem onClick={(e) => {
                                                            console.log(this.props.post_id)
                                                            deletePostClicked({variables:{post_id:this.props.post_id}})
                                                        }} >Delete Post</MenuItem>
                                                     );
                                                }
                                            }
                                        </Mutation>
                                         : <> </> }
                                    
                                </Menu>
                                {/* )}}
                                </Mutation> */}
                                
                        </h3>
                            
                    </div>
                </div>
                <div className="post_bottom">
                    <p>
                    {this.props.message}
                    </p>
                </div>
                <div className="post_image">
                    <img src={this.props.image} alt='' />
                </div>

                <div className="post_options">
                    <div className="post_option">
                        <ThumbUpIcon />
                        <p>Yummy!</p>
                    </div>
                    <div className="post_option">
                        <ChatBubbleOutlineIcon />
                        <p>Say It!</p>
                    </div>
                    <div className="post_option">
                        <ShareIcon />
                        <p>Try It!</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Post;