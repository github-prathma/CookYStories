import { Avatar, Button } from '@material-ui/core'
import React, {Component} from 'react'
import '../css/Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
// import {Mutation} from 'react-apollo'
import MenuItem from '@material-ui/core/MenuItem';
// import {UPDATE_POST} from '../../backend/FeedApis'

class Post extends Component {
    
        state = {
            anchorEl: null,
           
        }
    

    handleClick = event => this.setState({
        anchorEl: event.currentTarget
            })
    handleClose = () => this.setState({ anchorEl: null })
    
    render() {
        // console.log(this.props.id)
        // console.log(this.props.username)
        const sameUser =   (this.props.id === this.props.username )
        const { anchorEl } = this.state
        return (
            
            <div className='post'>
                <div className="post_top">
                    <Avatar src={this.props.profilePic} className='post_avatar' />
                    <div className="post_topInfo">
                        <h3>{this.props.username}<MoreVertIcon style={{ marginLeft: "605px" }} onClick={(e) => this.handleClick(e)} /><p>{this.props.createdAt}</p>
                        
                            
                        {/* <Mutation mutation={UPDATE_POST} > {
                ( updatePost, {data}) => {
                    return ( */}
                                <Menu id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                    onClose={this.handleClose}>
                                    {sameUser ?  <MenuItem onClick={(e) => {
                                            // e.preventDefault();
                                            this.handleClose();
                                            // updatePost( {variables :  {id:this.props.id, description: this.props.description, byUsername:this.props.byUsername}})
                                        }}> Edit Post
                                        </MenuItem>  : <MenuItem >Report Post</MenuItem>}
                                    {sameUser ? <MenuItem>Delete Post</MenuItem> : <></> }
                                    
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
                    
        )
    }
}

export default Post;