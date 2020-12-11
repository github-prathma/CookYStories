import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import AuthenticationService from '../../backend/AuthenticationService'


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
                <div className="user_image">
                    <Avatar src={`${AuthenticationService.getProfileImageUrl()}`} />
                    {/* <Avatar src={this.state.profilePic} /> */}
                </div>
                <div className="comment_section">
                    <form>
                        <input type="text" name="comment" value={this.state.comment} placeholder="addComment" onChange={e => this.handleChange(e)}>
                        </input> 
                        <Button >
                            Add Comment
                        </Button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default AddComment;