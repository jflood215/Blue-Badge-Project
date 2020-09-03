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
    fetch(`${APIURL}/weight/entry/`, {
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
        <Col md="4 mt-4">
          <WeightCreate fetchWeights={fetchWeights} token={props.token} />
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(255,255,255,.5",
            boxShadow: "0 0.5em 1em 0",
          }}
          md="8 text-center mt-2"
        >
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
