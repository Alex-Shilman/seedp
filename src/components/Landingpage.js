import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from '../assets/system-config-services.png';

export default () => (
  <section className="landing">
    <div className="login-form">
      <div className="logo">
         <img src={logo} width="64px" height="64px" alt="" />{' '}seeDP
      </div>
      <Link to="/kafka">SignOn</Link>
      <Form>
          <FormGroup>
            <Label className="login-label" for="exampleUsername">Username</Label>
            <Input className="login-field" type="text" name="username" id="exampleUsername" placeholder="username" />
          </FormGroup>
          <FormGroup>
            <Label className="login-label" for="examplePassword">Password</Label>
            <Input className="login-field" type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
          <Link to="/data-platform"><Button onClick={() => false} >SignOn</Button></Link>
      </Form>
    </div>
  </section>
);