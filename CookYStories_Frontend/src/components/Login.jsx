import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";

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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameOrEmail: "",
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
                  label="Username or Email Address"
                  name="email"
                  autoComplete="email"
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  className="submit"
                  variant="contained"
                  fullWidth
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
                <Link href="signup"> Sign Up</Link>
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
}
