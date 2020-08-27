import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import WeightCreate from "./WeightCreate";
import WeightTable from "./WeightTable";
import WeightEdit from "./WeightEdit";
import APIURL from "../helpers/environment";

const WeightIndex = (props) => {
  const [weights, setWeights] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [weightToUpdate, setWeightToUpdate] = useState({});
  const fetchWeights = () => {
    fetch(`${APIURL}:3000/weight/entry/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((weightData) => {
        setWeights(weightData);
        console.log(weightData);
      });
  };

  const editUpdateWeight = (weight) => {
    setWeightToUpdate(weight);
    console.log(weight);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchWeights();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <WeightCreate fetchWeights={fetchWeights} token={props.token} />
        </Col>
        <Col md="9">
          <WeightTable
            weights={weights}
            editUpdateWeight={editUpdateWeight}
            updateOn={updateOn}
            fetchWeights={fetchWeights}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <WeightEdit
            weightToUpdate={weightToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchWeights={fetchWeights}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default WeightIndex;
