import React, { useState } from "react";
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
  FormText,
} from "reactstrap";
import "../../src/App.css";

const fetchURL = "https://api.edamam.com/search";

const RecipeIndex = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsTwo, setResultsTwo] = useState([]);
  const [minCals, setMinCals] = useState("");
  const [maxCals, setMaxCals] = useState("");
  const [fetchComplete, setFetchComplete] = useState(false);

  const fetchResults = () => {
    let url = `${fetchURL}?q=${search}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=2&ingr=7`;

    url = minCals && maxCals ? url + `&calories=${minCals}-${maxCals}` : url;

    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        setResults(jsonData.hits[0]);
        setResultsTwo(jsonData.hits[1]);

        setFetchComplete(true);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <Container>
          <Row>
            <Col md="3"></Col>
            <Col md="5">
              <Form
                style={{
                  backgroundColor: "rgba(255,255,255,.61",
                  padding: "0.5em",
                  boxShadow: "0 0.5em 1em 0",
                  marginTop: "0.7em",
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
                    placeholder="Enter a number"
                    onChange={(e) => setMinCals(e.target.value)}
                  />
                  <br />
                  <Label for="MaxCals">Maximum Calories: </Label>
                  <Input
                    inline
                    type="number"
                    name="maxCals"
                    placeholder="Enter a number"
                    onChange={(e) => setMaxCals(e.target.value)}
                  />
                  <br />
                  <hr />
                  <FormText style={{ color: "black" }} id="formtext">
                    This form will allow you to connect to one of the most
                    comprehensive recipe databases in the world for fresh, new
                    meal ideas. Please enter a type of food to get started. You
                    may also add a calorie range for the meal to narrow your
                    search. To prevent information overload, two options will be
                    displayed on the right side of the screen. Have fun!
                  </FormText>
                  <hr />
                  <Button
                    style={{ marginLeft: "0.5em" }}
                    className="submit"
                    color="primary"
                  >
                    Search
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            {fetchComplete ? (
              <Col md="4 pt-1">
                <Card style={{ boxShadow: "0 0.5em 1em 0" }}>
                  <CardImg
                    style={{
                      height: "13.5em",
                      width: "96%",
                      paddingLeft: "1em",
                      paddingTop: "0.1em",
                    }}
                    top
                    width="60%"
                    src={results.recipe.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{results.recipe.label}</CardTitle>
                    <CardSubtitle>
                    </CardSubtitle>
                    <CardText></CardText>
                    <Button
                      color="primary"
                      href={results.recipe.url}
                      target="blank"
                    >
                      See Recipe
                    </Button>
                  </CardBody>
                </Card>

                <Card
                  style={{ marginTop: "0.5em", boxShadow: "0 0.5em 1em 0" }}
                >
                  <CardImg
                    style={{
                      height: "13.5em",
                      width: "96%",
                      paddingLeft: "1em",
                      paddingTop: "0.1em",
                    }}
                    top
                    width="50%"
                    src={resultsTwo.recipe.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{resultsTwo.recipe.label}</CardTitle>
                    <CardSubtitle>
                    </CardSubtitle>
                    <Button
                      color="primary"
                      href={resultsTwo.recipe.url}
                      target="blank"
                    >
                      See Recipe
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RecipeIndex;
