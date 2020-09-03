import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import APIURL from "../helpers/environment";

const WeightCreate = (props) => {
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");

  console.log(props.token);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/weight/entry`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
      body: JSON.stringify({ weight: { date: date, weight: weight } }),
    })
      .then((res) => res.json())
      .then((weightData) => {
        console.log(weightData);
        setDate("");
        setWeight("");

        props.fetchWeights();
      });
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,.55",

        boxShadow: "0 0.5em 1em 0",
        marginTop: "0.7em",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Enter a Weight</h3>
      <hr />
      <Form style={{ padding: "0.8em" }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date" />
          <Input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="weight" />
          <Input
            type="number"
            name="weight"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          ></Input>
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WeightCreate;
