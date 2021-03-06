import { Avatar } from '@material-ui/core'
import React, {Component} from 'react'
import '../css/Story.css'

export default class Story extends Component {
    render() {
        return (
            <div style={{backgroundImage: `url(${this.props.image})`}} className='story'>
                <Avatar className='story_avatar' src={this.props.image} />
                <div className="subtitle">
                    <h6>{this.props.title}</h6>
                </div>
      
            </div>
            
        )
    }

}