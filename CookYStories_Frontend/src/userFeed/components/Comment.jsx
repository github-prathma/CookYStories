import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentText: props.commentText,
            user: props.byUser
        }
    }
    render() {
        console.log(this.state.commentText)
        console.log(this.state.user)
        return (
            <div className="main_container">
                <div className="avatar">
                    <Avatar src={this.state.user.profileImageUrl} />
                    <h3>
                    <span>{this.state.user.firstName} {this.state.user.lastName}</span>
                    </h3>
                </div>
                
                <div className="comment_data">
                    <span>{this.state.commentText}</span>
                </div>
            </div>
        )
    }
}

export default Comment;