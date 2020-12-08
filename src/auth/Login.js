import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import APIURL from "../helpers/environment";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: { email: email, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
        history.push("/");
      });
  };

  return (
    <div style={{ backgroundColor: "rgba(242,245,246,0.53)" }}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            name="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            minLength="5"
            name="password"
            value={password}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Login
        </Button>

        <br />
      </Form>
    </div>
  );
};

export default Login;
