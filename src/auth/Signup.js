import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"; //1
import APIURL from "../helpers/environment";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLogin, setIsLogin] = useState(true);

  // const title = isLogin ? "Login" : "Sign Up";

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/signup`, {
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

  // function toggle(e) {
  //   e.preventDefault();
  //   if (isLogin === true) {
  //     setIsLogin(false);
  //   } else {
  //     setIsLogin(true);
  //   }
  // }

  return (
    <div style={{ backgroundColor: "rgba(242,245,246,0.47)" }}>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            name="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            minLength="5"
            required
            name="password"
            title="Must contain 5 or more characters"
            value={password}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Sign Up
        </Button>
        <br />
        {/* <Button
          style={{
            marginTop: "1px",
          }}
          id="orange"
          onClick={(e) => toggle(e)}
        >
          Toggle Sign Up/Login
        </Button>
        <br /> */}
      </Form>
    </div>
  );
};

export default Signup;
