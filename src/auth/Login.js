import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/environment";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      });
  };

  return (
    <div>
      {/* <ImageBackground
        source={require("../assets/photo-1490818387583-1baba5e638af.jpg")}
        style={{ width: 400, height: 400 }}
      /> */}

      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
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
      </Form>
    </div>
  );
};

export default Login;
