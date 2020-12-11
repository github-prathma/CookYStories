import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import {LOG_IN} from '../../backend/AuthApis'
import AuthenticationService from '../../backend/AuthenticationService'
import { Mutation } from 'react-apollo'

import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Container,
  Link,
  Typography,
} from "@material-ui/core";
import "../css/Login.css";
import { red } from "@material-ui/core/colors";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoginClicked: false
    };
  }


  render() {


    return (

      <Mutation mutation={LOG_IN} variables={
        {
          username: this.state.username, 
          password: this.state.password
        }}>
          {
            (onLogInClick, {loading, error, data}) => {
              if(loading) {
                return(
                <span>Loading ... </span>
                )}
              if(error) {
                return(
                <span>Error ... </span> 
                )}

              if (data) {
                console.log(data)
                const auth = data.login
                AuthenticationService.registerSuccessLogin(auth.user, auth.password, auth.token, auth.profileImageUrl)
                this.props.history.push(`/feed/${AuthenticationService.getLoggedInUser()}`)
              }


              return (
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                  <form className="form">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Username"
                          name="email"
                          autoComplete="email"
                          onChange={this.usernameTyped}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={this.passwordTyped}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          className="submit"
                          variant="contained"
                          fullWidth
                          onClick={e => {
                            onLogInClick({variables: {username:this.state.username, password:this.state.password}});
                            }}
                        >
                          Log in
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="#"> Forgot Password?</Link>
                      </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="center">
                      <Grid item>
                        Don't have an account?
                        <Link onClick={this.signupLinkClicked}> Sign Up</Link>
                      </Grid>
                    </Grid>
                  </form>
                  <br></br>
                  <Typography component="h5" align="center">
                    OR
                  </Typography>
                  <br></br>
                  <Button fullWidth variant="contained" color="primary">
                    <FacebookIcon fontSize="large" />{" "}
                    <span className="tab">Log in with Facebook </span>
                  </Button>
                  <br></br>
                  <Button
                    fullWidth
                    variant="contained"
                    style={{ backgroundColor: "#DC4A3E", color: "white" }}
                  >
                    <EmailSharpIcon fontSize="large" style={{ color: "white" }} />
                    <span className="tab">Log in with Gmail</span>
                  </Button>
                </div>
              </Container>
              )
            }
          }


          </Mutation>


        // 
    )
  }

  signupLinkClicked = () => {
    this.props.history.push('/signup');
  }
  usernameTyped = (event) => {
    this.setState({username: event.target.value});
  }
  passwordTyped = (event) => {
    this.setState({password: event.target.value});
  }

  logInClicked = (event) => {
    // todo api call 
    this.setState({
      isLoginClicked: true
    })
    console.log("log in button click")
    // this.props.history.push(`/feed/${AuthenticationService.getLoggedInUser}`)
}
}