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

// const styles = (theme) => ({

//   paper: {
//     marginTop: theme.spacing(3),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: "#afd0cc",
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//     color: "#afd0cc",
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "#afd0cc",
//   },
// });

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

  getPaperStyles() {
    return {
      marginTop: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  }

  getAvatarStyles() {
    return {
      margin: "8px",
      backgroundColor: "#afd0cc",
    };
  }

  getFormStyles() {
    return {
      width: "100%", // Fix IE 11 issue.
      marginTop: "24px",
      color: "#afd0cc",
    };
  }

  getSubmitStyles() {
    return {
      margin: "24px 0px 16px",
      backgroundColor: "#afd0cc",
    };
  }

  validateEmail(e) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        <div style={this.getPaperStyles()}>
          <Avatar style={this.getAvatarStyles()}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h5" align="center">
            Sign up to see recipes from your friends
          </Typography>

          <form
            style={this.getFormStyles()}
            onSubmit={this._onSubmit.bind(this)}
          >
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
                  onChange={this._handleEmailChange.bind(this)}
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
                  onChange={this._handlePasswordChange.bind(this)}
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
                  onChange={this._handleConfirmPasswordChange.bind(this)}
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
              {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={this.getSubmitStyles()}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    );
  }
}
