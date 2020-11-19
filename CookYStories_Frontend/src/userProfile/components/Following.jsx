import React, { Component } from 'react'
import chintu from '../../utils/Images/Chintu.PNG'
import prathma from '../../utils/Images/Prathma.PNG'
import pratik from '../../utils/Images/Pratik.PNG'
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
                      <img src={chintu} alt="img"/>
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
        


{/* 
        <Grid container spacing={3}>
          <Grid item xs>
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
          </Grid>

          <Grid item xs>
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
          </Grid>

          <Grid item xs>
          <Paper className='paper' elevation={3}>
          <Grid container spacing={2}>
          <Grid item>
          <ButtonBase className="image">
          <img src={pratik} alt="img"/>
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
          </Grid>
          </Grid>

          <Grid container spacing={3}>
          <Grid item xs>
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
          </Grid>

          <Grid item xs>
          <Paper className='paper' elevation={3}>
          <Grid container spacing={2}>
          <Grid item>
          <ButtonBase className="image">
          <img src={pratik} alt="img"/>
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
          </Grid>

          <Grid item xs>
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
          </Grid>

          </Grid>

          <Grid container spacing={3}>
          <Grid item xs={4}>
          <Paper className='paper' elevation={3}>
          <Grid container spacing={2}>
          <Grid item>
          <ButtonBase className="image">
          <img src={pratik} alt="img"/>
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
          </Grid>
        </Grid> */}
      </div>
    )
  }
}
