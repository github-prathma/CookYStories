import React, {Component} from 'react'
import '../css/SidebarRow.css'

export default class SidebarRow extends Component {
    render() {
        return (
            <div className='sidebarRow'>
                {this.props.statusImage}
                <h6>{this.props.title}</h6>
            </div>
        )
    }
}
