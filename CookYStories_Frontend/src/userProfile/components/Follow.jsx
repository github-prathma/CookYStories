import React, { Component } from 'react'
import chintu from '../../utils/Images/Chintu.PNG'
import prathma from '../../utils/Images/Prathma.PNG'
import pratik from '../../utils/Images/Pratik.PNG'
import '../css/Follow.css'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export default class Follow extends Component {
  constructor(props) {
    super(props)
    this.state={
      followers : this.props.followers
    }
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
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className="image">
                      <img src={user.profileImageUrl} alt="img"/>
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
