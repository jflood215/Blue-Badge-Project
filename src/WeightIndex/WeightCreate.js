import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
      body: JSON.stringify({ weight: { date: date, weight: weight } }), // change model name?
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
    <>
      <h3>Enter a Weight</h3>
      <Form onSubmit={handleSubmit}>
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
          Click to Submit
        </Button>
      </Form>
    </>
  );
};

export default WeightCreate;
