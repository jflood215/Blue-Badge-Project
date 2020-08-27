import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import WeightIndex from "../WeightIndex/WeightIndex";

const AppIndex = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">Success!</h1>
          <p className="lead text-center">
            This Full-Stack App features a Macro & Calorie Calculator, Recipe
            Database, and Weight Tracker to help quantify progress with your
            health, fitness, and weight goals.
          </p>
          <hr className="my-2" />
          <p className="center text-center">
            Click the button below to get started.
          </p>
          <p className="lead text-center">
            <Button color="primary">Start Here</Button>
          </p>
        </Container>
      </Jumbotron>
      <hr />
      <WeightIndex token={props.token} />
    </div>
  );
};

export default AppIndex;
