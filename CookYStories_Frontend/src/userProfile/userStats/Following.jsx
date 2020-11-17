import React, { Component } from 'react'
import chintu from '../../Images/Chintu.PNG'
import prathma from '../../Images/Prathma.PNG'
import '../../css/userprofile-css/Following.css'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export default class Following extends Component {
  render() {
    return (
      <div className="mainFollow">
      <Paper className='paper' elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className="image">
            <img src={chintu} alt="img"/>
            </ButtonBase>            
           </Grid> 
           <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  Chintamani Satavlekar
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Syracuse, USA
                </Typography>
                </Grid>
              </Grid>
              </Grid>
      </Grid>
        </Paper>
        <Paper className='paper' elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className="image">
            <img src={prathma} alt="img"/>
            </ButtonBase>            
           </Grid> 
           <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  Prathma Rastogi
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Syracuse, USA
                </Typography>
                </Grid>
              </Grid>
              </Grid>
      </Grid>
        </Paper>
        </div>
    )
  }
}
