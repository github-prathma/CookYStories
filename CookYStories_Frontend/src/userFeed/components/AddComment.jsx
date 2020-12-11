import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'


class AddComment extends Component {

    constructor(props) {
        super(props)
        this.state={
            comment:'',
            post_id:props.post_id,
            profileImageurl:props.profileImageurl
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState( {
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div className="main_add_comment">
                <div className="user_image">
                    <Avatar src={this.state.profileImageurl} />
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