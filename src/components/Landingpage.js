import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Logo from './Logo';
import loadingImage from '../assets/spinner.gif';

const Spinner = ({ width, height, text }) => (
  <div className="spinner animated">
    <img
      src={loadingImage}
      width={width}
      height={height}
      style={{padding:5}}/>
    {text}
  </div>
);

const ULPage = ({ onClick, signingIn }) => (
  <section className="landing">
    <div className="login-form">
      <Logo width="64px" height="64px" />
      <Form>
        <FormGroup>
          <Label className="login-label" for="exampleUsername">Username</Label>
          <Input className="login-field" type="text" name="username" id="exampleUsername" placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Label className="login-label" for="examplePassword">Password</Label>
          <Input className="login-field" type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
          <Button onClick={onClick} >
            {
              (signingIn) ? <Spinner width={35} height={35} text='Signing on...'/> : 'SignOn'
            }
          </Button>
      </Form>
    </div>
  </section>
);

export default class Landingpage extends Component {
  state = {
    signingIn: false
  }
  
  _doSignIn = (e) => {
    const { history } = this.props;
    this.setState({ signingIn: true });
    setTimeout(() => { history.push('/data-platform') }, 2000);
    e.preventDefault();
  }
  
  render() {
    const { signingIn } = this.state;
    return (
      <ULPage
        onClick={this._doSignIn}
        signingIn={signingIn}
      />
    )
  }
}