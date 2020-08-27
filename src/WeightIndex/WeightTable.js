import React from "react";
import { Table, Button } from "reactstrap";

const WeightTable = (props) => {
  const deleteWeight = (weight) => {
    fetch(`http://localhost:3000/weight/entry/${weight.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchWeights());
  };

  const weightMapper = () => {
    //props?
    return props.weights.map((weight, index) => {
      return (
        <tr key={index}>
          {/* <th scope="row">{weight.id}</th> */}
          <td>{weight.date}</td>
          <td>{weight.weight}</td>
          <td>TBD!</td>
          <td>
            <Button
              color="primary"
              onClick={() => {
                props.editUpdateWeight(weight);
                props.updateOn();
              }}
            >
              Edit
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteWeight(weight);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <h3>Weight History</h3>
      <hr />
      <Table dark bordered hover>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Date</th>
            <th>Weight</th>
            <th>Rolling Average</th>
            <th>Edit or Delete</th>
          </tr>
        </thead>
        <tbody>{weightMapper()}</tbody>
      </Table>
    </>
  );
};

export default WeightTable;
