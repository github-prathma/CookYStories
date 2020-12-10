import React, { Component } from 'react'
import chefAvatar from '../../utils/Images/chefAvatar.jpg'
import '../css/Follow.css'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {withRouter} from 'react-router-dom';

class Follow extends Component {
  constructor(props) {
    super(props)
    this.state={
      followers : this.props.followers
    }
  }

  componentWillReceiveProps(props) {
    this.setState(
      {
        followers : props.followers
      }
    )
  }

  render() {
    const followers = this.state.followers
    return (
      <div className="mainFollow">
        <Grid container spacing={3}>
        {
          followers.map (
            user =>             
            <Grid item xs>
              <Paper className='paper' elevation={3}>
                <Grid container spacing={2} onClick={() => this.followerClicked(user.username)}>
                  <Grid item>
                    <ButtonBase className="image">
                      {user.profileImageUrl != null && user.profileImageUrl != "" && <img src={user.profileImageUrl} alt="img"/>}
                      {(user.profileImageUrl == null || user.profileImageUrl == "") && <img src={chefAvatar} alt="img"/>}
                      
                    </ButtonBase>            
                  </Grid> 
  
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="h6" gutterBottom>
                          {user.firstName} {user.lastName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          {user.city}, {user.country}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>      
          )
        }
        </Grid>
      </div>
    )
  }

  followerClicked = (username) => {
    this.props.history.push(`/user/${username}`)
  }
}

export default withRouter(Follow);