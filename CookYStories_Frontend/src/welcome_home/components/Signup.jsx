import React, { Component } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../css/Signup.css";
// import AuthenticationService from '../../backend/AuthenticationService'

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      emailErrorText: "",
      password: "",
      confirmPassword: "",
      confirmPasswordErrorText: "",
    };
  }

  validateEmail(e) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  }

  _onSubmit(e) {
    e.preventDefault();

    console.log("_onSubmit");
    if (
      this.state.emailErrorText === "" &&
      this.state.confirmPasswordErrorText === ""
    ) {
      console.log("_onSubmit: state=", this.state);
    } else {
      console.log("has error, unable to submit");
    }
  }

  _handlePasswordChange(e, val) {
    this.setState({ password: val });
  }

  _handleConfirmPasswordChange(e, val) {
    var errorText = "";
    if (val !== this.state.password) {
      errorText = "Passwords are not matched";
    }
    this.setState({
      confirmPassword: val,
      confirmPasswordErrorText: errorText,
    });
  }

  _handleEmailChange(e, val) {
    var errorText = "";
    if (!this.validateEmail(val)) {
      errorText = "Email Format Error";
    }
    this.setState({ emailErrorText: errorText, email: val });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="a">
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h5" align="center">
            Sign up to see recipes from your friends
          </Typography>

          <form className="form" onSubmit={this._onSubmit.bind(this)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="username"
                  autoComplete="uname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.email}
                  errorText={this.state.emailErrorText}
                  onChange={this._handleChange.bind(this)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.password}
                  onChange={this._handleChange.bind(this)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.confirmPassword}
                  errorText={this.state.confirmPasswordErrorText}
                  onChange={this._handleChange.bind(this)}
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submit"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                Already have an account?
                <Link onClick={this.loginLinkCLicked}> Login</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    );
  }

  loginLinkCLicked = () => {
    this.props.history.push('/login');
  }

  _onSubmit = (event) => {

  }

  _handleChange = (event) => {
      this.setState(
        {
          [event.target.name]: event.target.value
        }
      )      
  }

 
}
