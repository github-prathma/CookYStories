import { Avatar } from '@material-ui/core'
import React, {Component} from 'react'
import '../css/Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

class Post extends Component {
    render() {
        return (
            <div className='post'>
                <div className="post_top">
                    <Avatar src={this.props.profilePic} className='post_avatar' />
                    <div className="post_topInfo">
                        <h3>{this.props.username}</h3>
                        <p>TimeStamp..!!</p>
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