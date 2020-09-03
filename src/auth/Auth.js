import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";
import "../../src/App.css";
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Login" : "Sign Up";

  function toggle(e) {
    e.preventDefault();
    if (isLogin === true) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }
  return (
    <Container className="auth">
      <Row>
        <Col></Col>
        <Col md="6 text-center border border-dark rounded pb-2">
          {isLogin ? (
            <Login updateToken={props.updateToken} />
          ) : (
            <Signup updateToken={props.updateToken} />
          )}
          <Button
            style={{
              marginTop: "1px",
            }}
            id="orange"
            onClick={(e) => toggle(e)}
          >
            Need to Sign Up?
          </Button>
        </Col>

        <Col>
          <div className="p-3 mt-4 my-2 rounded">
            <Toast
              style={{
                backgroundColor: "rgba(255,255,255,.8)",
                boxShadow: "0 0.5em 1em 0",
              }}
            >
              <ToastHeader>Welcome!</ToastHeader>
              <ToastBody>
                This app is designed to help you reach your health and wellness
                goals by optimizing calorie and macro intake, providing recipe
                and meal inspiration, and quantifying progress by tracking
                changes in your weight.
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
