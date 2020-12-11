import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import AuthenticationService from '../../backend/AuthenticationService'
import '../css/AddComment.css'

class AddComment extends Component {

    constructor(props) {
        super(props)
        this.state={
            comment:'',
            post_id:props.post_id,
            profilePic:props.profilePic
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState( {
            [event.target.name] : event.target.value
        })
    }

    render() {
        console.log(this.state.profileImageurl)
        return (
            <div className="main_add_comment">
                <div className="titleSection">
                <p>Add a comment on this post!</p>
                </div>
                <div className="addComment">
                
                    <Avatar src={`${AuthenticationService.getProfileImageUrl()}`} />
                        
                    <div className="comment_section">
                        <form>

                            <textarea 
                            name="comment" 
                            rows="2"
                            cols="52"
                            value={this.state.comment} 
                            placeholder="addComment" 
                            onChange={e => this.handleChange(e)}>
                            </textarea> 
                            <Button >
                                Add Comment
                            </Button>
                        </form>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default AddComment;