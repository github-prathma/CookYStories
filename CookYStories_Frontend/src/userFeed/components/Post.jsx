import { Avatar } from '@material-ui/core'
import React, {Component} from 'react'
import '../css/Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Post extends Component {
    state = {
        anchorEl: null
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
                        <h3>{this.props.username}<MoreVertIcon style={{ marginLeft: "605px" }} onClick={this.handleClick} />
                            
                            <Menu id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                onClose={this.handleClose}>
                                {sameUser ?  <MenuItem onClick={this.handleClose}>Edit Post</MenuItem>  :<MenuItem onClick={this.handleClose}>Report Post</MenuItem>}
                                {sameUser ? <MenuItem onClick={this.handleClose}>Delete Post</MenuItem> : <></> }
                                
                        </Menu></h3>
                <p>{this.props.createdAt}</p>                        
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