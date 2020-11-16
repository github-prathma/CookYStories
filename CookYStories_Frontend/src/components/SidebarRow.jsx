import { Avatar } from '@material-ui/core'
import React, {Component} from 'react'
import '../css/SidebarRow.css'
import src from '../Images/rushang.PNG'

export default class SidebarRow extends Component {
    render() {
        return (
            <div className='sidebarRow'>
                {src && <Avatar src={src} />}
                {Icon && <Icon />}

                <h4>{title}</h4>
      
            </div>
        )
    }
}
