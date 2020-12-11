import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'

class SinglePostModalView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            byUser : props.byUser,
            description : props.description,
            createdAt : props.createdAt,

        }
    }
    render() {

        return (
            <div className="main_content">
                <div className="post_top">
                    <Avatar src = {this.state.byUser.profileImageUrl}></Avatar>
                    <div clasName="post_top_info">
                    <h3>{this.state.byUsername}</h3>
                    </div>
                </div>
                <div className="user_info">

                </div>
                <div className="images">
                </div>   
                <div className="meta_info">
                </div>                 
                <div className="comments_box">

                </div>
            </div>
        )
    }
}