import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import APIURL from "../helpers/environment";

const WeightEdit = (props) => {
  const [editDate, setEditDate] = useState(props.weightToUpdate.date);
  const [editWeight, setEditWeight] = useState(props.weightToUpdate.weight);

  const weightUpdate = (event, weight) => {
    event.preventDefault();
    fetch(`${APIURL}/weight/entry/${props.weightToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        weight: { date: editDate, weight: editWeight },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchWeights();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Enter a Weight</ModalHeader>
      <ModalBody>
        <Form onSubmit={weightUpdate}>
          <FormGroup>
            <Label htmlFor="date">Edit Date</Label>
            <Input
              type="date"
              name="date"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="weight">Edit Weight</Label>
            <Input
              type="number"
              name="weight"
              value={editWeight}
              onChange={(e) => setEditWeight(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Update your weight!
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default WeightEdit;
