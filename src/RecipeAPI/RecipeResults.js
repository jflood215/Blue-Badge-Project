import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const RecipeResults = (props) => {
  const { label, image } = props.food;
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{label}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button color="primary">Details</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeResults;
