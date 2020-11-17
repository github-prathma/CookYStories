import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import AuthenticationService from '../backend/AuthenticationService'

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
    };
  }

  render() {
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
                  onClick={this.logInClicked}
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
    );
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
    
    if (this.state.username === "rushang2413" && this.state.password === "pass@123"){
      AuthenticationService.registerSuccessLogin(this.state.username, this.state.password);
      this.props.history.push(`/feed/${this.state.username}`);
    }
    else{
      alert("Wrong credentials. Try Again")
    }
    
  }
}
