import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default () => (
  <section className="landing">
    <div className="login-form">
      <Form>
          <FormGroup>
            <Label className="login-field" for="exampleUsername">Username</Label>
            <Input className="login-field" type="text" name="username" id="exampleUsername" placeholder="username" />
          </FormGroup>
          <FormGroup>
            <Label className="login-field" for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
          <Link to="/data-platform"><Button >SignOn</Button></Link>
        </Form>
    </div>
  </section>
  
);