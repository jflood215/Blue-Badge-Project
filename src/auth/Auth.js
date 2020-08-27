import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  // const [textColor, setTextColor] = useState("blue");

  const title = isLogin ? "Login" : "Sign Up";
  // const componentCall = isLogin ? Signup : Login

  function toggle(e) {
    e.preventDefault();
    if (isLogin === true) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }
  return (
    <Container className="auth" id="a">
      <Row>
        <Col></Col>
        <Col md="6 text-center border border-dark rounded pb-1">
          {isLogin ? (
            <Login updateToken={props.updateToken} />
          ) : (
            <Signup updateToken={props.updateToken} />
          )}
          <Button color="warning" onClick={(e) => toggle(e)}>
            Toggle Sign Up/Login
          </Button>
          <br />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Auth;
