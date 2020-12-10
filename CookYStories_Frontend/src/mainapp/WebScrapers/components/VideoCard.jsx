import React, { Component } from 'react'
import '../css/Channels.css'

class VideoCard extends Component {
    render() {
        return (
            <div className="video_card_component">
                <div className="meta">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="image">
                    <img className="VideoThumbnail" src = {this.props.thumbnailUrl} alt={this.props.title} height="150px" width="200px" />
                </div>
                <div className="overlay_info">
                    <span>{this.props.views} </span>
                    <span>{this.props.age}</span>
                </div>
            </div>
        )
    }
}

export default VideoCard;