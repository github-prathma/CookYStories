import React, { Component } from 'react'
import chintu from '../../Images/Chintu.PNG'
import prathma from '../../Images/Prathma.PNG'
import pratik from '../../Images/Pratik.PNG'
import '../../css/userprofile-css/Follow.css'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';



export default class Follow extends Component {
  render() {
    return (
      <div className="mainFollow">
      <Paper className='paper' elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className="image">
            <img src={chintu} alt="image"/>
            </ButtonBase>            
           </Grid> 
           <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  Chintamani Satavlekar
                </Typography>
                <Typography variant="body2" color="textSecondary">
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
            <img src={prathma} alt="image"/>
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
        <Paper className='paper' elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className="image">
            <img src={pratik} alt="image"/>
            </ButtonBase>            
           </Grid> 
           <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  Pratik Bhatia
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
