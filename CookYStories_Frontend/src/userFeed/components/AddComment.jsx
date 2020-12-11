import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import AuthenticationService from '../../backend/AuthenticationService'
import '../css/AddComment.css'
import {Mutation} from 'react-apollo'
import {ADD_COMMENT} from '../../backend/FeedApis'

class AddComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            description:'',
            postId:props.post_id,
            profilePic:props.profilePic,
            datacomment:false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState( {
            [event.target.name] : event.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <Mutation mutation={ADD_COMMENT} variables={{postId:this.state.postId, byUsername:AuthenticationService.getLoggedInUser(), description:this.state.description}}>
                {
                    (addCommentClicked, {loading, error, data}) => {
                        console.log(this.props.post_id)
                        if(loading) {
                        return(
                        <span>Loading ... </span>
                        )}
                        if(error) {
                        return(
                        <span>Error ... </span> 
                        )}

                        if (data && this.state.datacomment) {
                        console.log(data)
                        this.setState({datacomment:true})
                        
                        }

                        return (
                            <div className="main_add_comment">
                                
                                <div className="addComment">
                                
                                    <Avatar src={`${AuthenticationService.getProfileImageUrl()}`} />
                                        
                                    <div className="comment_section">
                                        <form>
                                            <textarea 
                                            name="description" 
                                            rows="2"
                                            cols="52"
                                            value={this.state.description} 
                                            placeholder="Comment ... " 
                                            onChange={e => this.handleChange(e)}>
                                            </textarea> 
                                            <Button onClick={(e) => {
                                                addCommentClicked({variables:{postId:this.state.postId, byUsername:AuthenticationService.getLoggedInUser(), description:this.state.description}})
                                            }}>
                                                Add Comment
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            
                            
                            </div>
                        );
                    }
                }
            </Mutation>
            
        )
    }
}

export default AddComment;