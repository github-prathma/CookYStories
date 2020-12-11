import React, { Component } from 'react'
import '../css/Channels.css'

class VideoCard extends Component {
    render() {
        return (
            <div className="videocard">
                <div className="image">
                    <img className="VideoThumbnail" src = {this.props.thumbnailUrl} alt={this.props.title} />
                </div>

                <div className="meta">
                    <h6>{this.props.title}</h6>
                </div>
                
                <div className="overlay">
                    <span>{this.props.views} </span>
                    <span>{this.props.age}</span>
                </div>
            </div>
        )
    }
}

export default VideoCard;