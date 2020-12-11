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
import UpdatePost from './UpdatePost'
import Comment from './Comment'
import AddComment from './AddComment';

class Post extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            profilePic: props.profilePic,
            createdAt: props.timestamp,
            post_id : props.post_id,
            description : props.message,
            byUsername: props.username,
            image : props.image,
            byUser : props.byUser,
            showModal:false
        }

        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.menuModalClose = this.menuModalClose.bind(this);

    }

    onFieldChange = (param) => {
    
        this.setState({
          
          description: param.description,
          byUsername: param.byUsername,
          post_id:param.post_id,
    
        });
      }
    

    componentWillReceiveProps(props) {
        this.setState(
            {
               
                description : props.description,
                
            }
        )
    }

    modalOpen() {
        this.setState({ showModal: true });
    }
    
    modalClose() {
        this.setState({
            showModal: false
        });
    } 

    menuModalClose() {
        this.setState({
            anchorEl: null
        })
    }


    handleClick = event => this.setState({
        anchorEl: event.currentTarget
            })
    

    handleUpdate = (event) => this.setState({ 
        [event.target.name] : event.target.value
    })

    
    
    render() {
        // console.log(this.props.id)
        // console.log(this.props.username)
        const sameUser =   (this.props.id === this.props.username )
        const { anchorEl } = this.state
        return (
            
            <div className='post'>
                <div className="post_top">
                <Avatar src={this.state.profilePic} className='post_avatar' />
                    <div className="post_topInfo">
                    <h3>{this.state.byUsername}<MoreVertIcon style={{ marginLeft: "605px" }} onClick={this.handleClick} /><p>{this.state.createdAt}</p>
                        
                            
                        
                                <Menu id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={this.menuModalClose}
                                        >
                                    {sameUser ?  
                                    
                                    <MenuItem onClick={ (e) => this.modalOpen(e)
                                    }
                                    > Edit Post
                                    </MenuItem>  

                                        
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
                                                            }} >Delete Post
                                                        </MenuItem>
                                                );
                                            }
                                        }
                                    </Mutation>
                                    : <></> }
                                    
                                </Menu>
                                <UpdatePost show={this.state.showModal} onFieldChange={(e) => this.onFieldChange(e)} handleUpdate={(e) => this.handleUpdate(e)}  handleClose={e => this.modalClose(e)} description={this.state.description} byUsername={this.state.byUsername} post_id={this.state.post_id} />
                                
                        </h3>
                               
                    </div>
                </div>
                <div className="post_bottom">
                    <p>
                    {this.state.description}
                    </p>
                </div>
                <div className="post_image">
                    <img src={this.state.image} alt='' />
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
                <div className="CommentsBox">
                    <div className="previousComments">
                        {
                            this.props.comments.map(
                                comment => <Comment commentText={comment.commentText} byUser={comment.byUser}/>
                            ) 
                        }
                    </div>
                    <div className="newComment">
                        <AddComment post_id={this.post_id} profileImageUrl={this.state.profilePic}/>
                    </div>
                </div>
            </div>
                    
        )
    }
}

export default Post;