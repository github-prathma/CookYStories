import { Avatar } from '@material-ui/core'
import React from 'react'
import {Component} from 'react'
import rushang from '../../utils/Images/rushang.PNG'
import '../css/PostSend.css'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'

export default class PostSend extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            input : "",
            imgUrl : ""
        }
        
    }
    render() {
        return (
            <div className='postSend'>
                <div className='postSend_top'>
                    <Avatar src={rushang} className="user_avatar"/>
                    <form>
                    <input
                        value={this.props.input}
                        onChange={(e) => this.setInput(e.target.value)}
                        className='postSend_input'
                        placeholder={'What are you coooking today?'} />
                        <div className="postSend_option">
                        <PhotoLibraryIcon style={{ color: 'green' }} />
                        <h3>Photo/Video</h3>
                    </div>
                    </form>
                </div>
                <div className='postSend_bottom'>
                    {/* <div className="postSend_option">
                        <VideocamIcon style={{ color: '#ffb2a4' }} />
                        <h3>Live Cooking!</h3>
                    </div> */}
                    {/* <div className="postSend_option">
                        <PhotoLibraryIcon style={{ color: 'green' }} />
                        <h3>Photo/Video</h3>
                    </div> */}
                </div>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setInput('')
        this.setImgUrl('')
    }

    setInput = () => {
        this.setState = {
            input : "",
            imgUrl : ""
        }
    }
}
