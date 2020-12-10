import React, { Component } from 'react'
import chefAvatar from '../../utils/Images/chefAvatar.jpg'
import '../css/Following.css'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export default class Following extends Component {

  constructor(props) {
    super(props)
    this.state={
      following : this.props.following
    }
  }

  render() {
    const following = this.state.following
    return (
      <div className="mainFollow">

        
          <Grid container spacing={3}>
            {
          following.map (
              
            user => 

            
            <Grid item xs>
              <Paper className='paper' elevation={3}>
                <Grid container spacing={2}>
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
}
