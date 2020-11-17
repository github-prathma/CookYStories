import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import {Component} from 'react'
import rushang from '../Images/rushang.PNG'
import '../css/PostSend.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

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
                    <Avatar src={rushang}/>
                    <form>
                    <input
                        value={this.props.input}
                        onChange={(e) => this.setInput(e.target.value)}
                        className='postSend_input'
                        placeholder={'What are you coooking today?'} />
                    <input
                        value={this.props.imgUrl}
                        onChange={(e) => this.setImgUrl(e.target.value)}
                        placeholder={'Share the receipe(URL)!!'} />
                    <button onClick={this.handleSubmit} type='submit'> Hidden Button</button>
                    </form>
                </div>
                <div className='postSend_bottom'>
                    <div className="postSend_option">
                        <VideocamIcon style={{ color: '#ffb2a4' }} />
                        <h3>Live Cooking!</h3>
                    </div>
                    <div className="postSend_option">
                        <PhotoLibraryIcon style={{ color: 'green' }} />
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="postSend_option">
                        <InsertEmoticonIcon style={{ color: 'orange' }} />
                        <h3>Feeling</h3>
                    </div>
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