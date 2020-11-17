import logo from '../CookYLogo.png'
import '../css/CookStories.css'
import React, { Component } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import rushang from '../Images/rushang.PNG'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import AddIcon from '@material-ui/icons/Add'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import '../css/Header.css'
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
//import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router';
import { AddPost } from './AddPost';


class HeaderComponent extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    
    this.state = {
      modal: false,
      description: "",
      modalInputDescription: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({ description: this.state.modalInputDescription });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modal: false
    });
  }

    render() {
        return (
            <div className="header">
      <div className="header_left">
        <img src={logo} alt='Logo' /> 
        <div className="header_input">
          <SearchIcon />
          <input placeholder='Search CookYStory'
            type='text' />
        </div>

      </div>  
      
      <div className="header_middle">
        <div className="header_option header_option--active">
          <HomeIcon fontSize='large' onClick={this.onHomeClick}/>
        </div>
        <div className="header_option">
          <FlagIcon fontSize='large' />
        </div>

      </div>
      <div className="header_right">{}
        <div className="header_info">
          <Avatar src={rushang}/>
          <h4>rushang2413</h4>
        </div>

        <IconButton>
                <AddIcon onClick={e => this.modalOpen(e)} />
                <AddPost show={this.state.modal} handleClose={e => this.modalClose(e)}>
                <form className="form-group">
              <div className='EditImage'>
               <AddAPhotoIcon />
                </div>
                <ul>
                <div className="form-group">
                  <label >How to Cook!</label>
                  <textarea
                    type="text"
                    value={this.state.description}
                    name="description"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                    placeholder="Enter your way to cook!"
                    style={{ display: 'flex' }} />             
                      </div>
                    </ul>
                    </form>
                </AddPost>
        </IconButton>
        <IconButton>
          <NotificationActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
            // <header>
            //     <nav className="navbar navbar-expand-md navbar-dark bg-header">
            //         <div>
            //             <a className="navbar-brand" href="#">
            //                 <img src={logo}/>
            //             </a>
            //         </div>
            //         <ul className="navbar-nav navbar-collapse justify-content-end">
            //             {/* TODO if else for login / logout */}
            //             <li>Login</li> 
            //             <li>Logout</li>
            //         </ul>
            //     </nav>
            // </header>
        );
    }

    onHomeClick = (event) => {
        console.log("home button click")
        // this.setState = {
        //     renderFeed : true
        // }
        // this.props.history.push('/feed')
    }
}

export default withRouter(HeaderComponent);