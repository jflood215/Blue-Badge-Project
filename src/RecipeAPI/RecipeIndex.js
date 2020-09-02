import React, { useState } from "react";
import RecipeResults from "./RecipeResults";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardColumns,
  FormText,
} from "reactstrap";
import { Link } from "react-router-dom";
import MacroCreate from "../MacroIndex/MacroCreate";
import "../../src/App.css";

const fetchURL = "https://api.edamam.com/search";
const app_key = "92d4064d96f5e0819daf5f490bc7b323";
const app_id = "f3808d48";

const RecipeIndex = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsTwo, setResultsTwo] = useState([]);
  const [minCals, setMinCals] = useState("");
  const [maxCals, setMaxCals] = useState("");

  const fetchResults = () => {
    let url = `${fetchURL}?q=${search}&app_id=${app_id}&app_key=${app_key}&from=0&to=2&ingr=7`;

    url = minCals || maxCals ? url + `&calories=${minCals}-${maxCals}` : url;
    // url = maxCals ? url + `&calories=${maxCals}` : url;

    // https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&calories=591-722

    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        setResults(jsonData.hits[0].recipe);
        setResultsTwo(jsonData.hits[1].recipe); // or just jsonData?
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };

  //   function displayCards() {
  //     return results.map((result, index) => (
  //       <RecipeResults key={index} food={result} />
  //     ));

  return (
    <div className="main">
      <div className="mainDiv">
        <Container>
          <Row>
            <Col md="3"></Col>
            <Col md="5">
              <Form
                style={{
                  backgroundColor: "rgba(255,255,255,.52",
                  padding: "0.5em",
                  boxShadow: "0 0.5em 1em 0",
                  marginTop: "0.8em",
                }}
                onSubmit={(e) => handleSubmit(e)}
              >
                <FormGroup>
                  <h2 style={{ textAlign: "center", text: "underline" }}>
                    Recipe Inspiration & Ideas
                  </h2>
                  <hr />
                  <Label for="Search">What do you want to eat today? </Label>
                  <Input
                    type="text"
                    required
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    required
                  />
                  <br />
                  <Label for="MinCals">Minimum Calories: </Label>
                  <Input
                    inline
                    type="number"
                    name="minCals"
                    placeholder="This field is optional"
                    onChange={(e) => setMinCals(e.target.value)}
                  />
                  <br />
                  <Label for="MaxCals">Maximum Calories: </Label>
                  <Input
                    inline
                    type="number"
                    name="maxCals"
                    placeholder="This field is optional"
                    onChange={(e) => setMaxCals(e.target.value)}
                  />
                  <br />
                  <hr />
                  <FormText style={{ color: "black" }} id="formtext">
                    This form will allow you to connect to one of the largest
                    recipe databases in the world for fresh, new meal ideas.
                    Please enter a type of food to get started. You may also add
                    a calorie range for the meal, or select a minimum or maximum
                    only. To prevent information overload, two options will be
                    displayed on the right side of the screen. Have fun!
                  </FormText>
                  <hr />
                  <Button className="submit" id="orange">
                    Search
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            <Col md="4 pt-4">
              <Card style={{ boxShadow: "0 0.5em 1em 0" }}>
                <CardImg
                  top
                  width="100%"
                  src={results.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{results.label}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button color="primary">Details</Button>
                </CardBody>
              </Card>
              <Card style={{ marginTop: "1em", boxShadow: "0 0.5em 1em 0" }}>
                <CardImg
                  top
                  width="100%"
                  src={resultsTwo.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{resultsTwo.label}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button color="primary">Details</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RecipeIndex;

// style={{ marginTop: "1em", boxShadow: "0 0.5em 1em 0" }} Top of Card

//  <CardColumns>{displayCards()}</CardColumns>

/*
 <Card style={{ boxShadow: "0 0.5em 1em 0" }}>
                  <CardImg
                    top
                    width="100%"
                    src="/assets/318x180.svg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Details</Button>
                  </CardBody>
                </Card>
                <Card style={{ marginTop: "1em", boxShadow: "0 0.5em 1em 0" }}>
                  <CardImg
                    top
                    width="100%"
                    src="/assets/318x180.svg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Title goes here!</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Details</Button>
                  </CardBody>
                </Card>
                */
