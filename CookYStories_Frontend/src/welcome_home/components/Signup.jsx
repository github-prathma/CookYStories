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
import {SIGN_UP} from '../../backend/AuthApis'
import { Mutation } from 'react-apollo'
import Alert from '@material-ui/lab/Alert';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

      input: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        bioDescription: ""
      },

      errors: {
        emailError: "",
        confirmPasswordError: ""
      },

      isValidData: true
      
    };

    // this._onSubmit = this._onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    let isValid = true
    let input = this.state.input
    let errors = this.state.errors

    if (input["email"] != "") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["emailError"] = "Please enter valid email address.";
        }
    }

    if (input["confirmPassword"] !== input["password"]) {
      isValid = false;
      errors["confirmPasswordError"] = "Passwords are not matched";
    } 

    this.setState({
      errors:errors,
      isValidData: isValid
    })
    return isValid;

  }

  _handleChange = (event) => {
    this.setState(
      {
        input: {
          ...this.state.input,
          [event.target.name]: event.target.value
        },
        errors: {
          ...this.state.errors
        }
      }
    )      
}

handleSubmitClick = (mutationCallBack, e) => {
   console.log("dbhhdhdhjhdj")

    // let isValidated = this.validate()
    // console.log(isValidated)

    // if (isValidated) {
    //   mutationCallBack({variables: {
    //       firstName: this.state.input.firstName , 
    //       lastName: this.state.input.lastName, 
    //       email: this.state.input.email, 
    //       username: this.state.input.username, 
    //       password: this.state.input.password,
    //       bio: this.state.input.bioDescription
    //     }})
    // } else {
    //   this.setState({
    //     isValidData: false
    //   })
    // }
  }


  render() {    
    return (

      <Mutation mutation={SIGN_UP} variables={
        {
          firstName: this.state.input.firstName , 
          lastName: this.state.input.lastName, 
          email: this.state.input.email, 
          username: this.state.input.username, 
          password: this.state.input.password,
          bio: this.state.input.bioDescription
        }}>
        {
            (onSignUpClick, {loading, error, data}) => {

                  if(loading) {

                  }
                  
                  if (error) {
                      return(
                        <Alert severity="error">Invalid Data.. Try Again!</Alert>
                      )
                  }
                        
                  if (data) {
                    console.log(data)

                    // this.props.history.push('/login')
                  }

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
            
                      <form className="form" onSubmit={e => {this.handleSubmitClick()}}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              value={this.state.input.firstName || ""}
                              onChange={(e) => this._handleChange(e)}
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
                              value={this.state.input.lastName || ""}
                              onChange={(e) => this._handleChange(e)}
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
                              value={this.state.input.username || ""}
                              onChange={(e) => this._handleChange(e)}
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
                              value={this.state.input.email || ""}
                              onChange={(e) => this._handleChange(e)}
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                            />
                            <div className="text-danger">{this.state.errors.emailError}</div>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              value={this.state.input.password || ""}
                              onChange={(e) => this._handleChange(e)}
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
                                  value={this.state.input.confirmPassword || ""}
                                  onChange={(e) => this._handleChange(e)}
                                  variant="outlined"
                                  required
                                  fullWidth
                                  name="confirmPassword"
                                  label="Confirm Password"
                                  type="password"
                                  id="confirm-password"
                                  autoComplete="current-password"
                                />
                            <div className="text-danger">{this.state.errors.confirmPasswordError}</div>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              value={this.state.bioDescription}
                              onChange={(e) => this._handleChange(e)}
                              variant="outlined"
                              fullWidth
                              name="bioDescription"
                              label="Bio"
                              id="bioDescription"
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
                    {!this.state.isValidData && <Alert severity="error">Invalid Data.. Try Again!</Alert>}
                  </Container>

                  )
            
            }
        }

        </Mutation>
    );
  }

  loginLinkCLicked = () => {
    this.props.history.push('/login');
  }

 

 
}
