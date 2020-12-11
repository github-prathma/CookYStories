import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import '../css/Comment.css'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentText: props.commentText,
            user: props.byUser,
        }
    }
    render() {
        console.log(this.state.commentText)
        console.log(this.state.user)
        return (
            <div className="comment">
                <div className="comment_box">
                    <div className="comment_top_info">
                    <Avatar src={this.state.user.profileImageUrl} className='commenter_avatar' />
                        
                    </div>
                    
                    <div className="comment_data">
                    <p>
                        <b><span>{this.state.user.username}: </span></b>
                        {this.state.commentText}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Comment;