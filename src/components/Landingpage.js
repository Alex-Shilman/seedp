import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default () => (
  <section className="landing">
    <div className="login-form">
      <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Link to="/data-platform">Enter at your own risk</Link>
        </Form>
    </div>
  </section>
  
);