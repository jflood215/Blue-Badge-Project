import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  FormText,
  Container,
  Row,
  Col,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import RecipeIndex from "../RecipeAPI/RecipeIndex";

const MacroCreate = (props) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [goal, setGoal] = useState(0);
  const [gender, setGender] = useState(true);

  const calories = () => {
    if (height > 1 && gender === "Male") {
      return Math.round(
        (4.536 * weight + 15.88 * height - 5 * age + 5) * activity + +goal
      );
    }
    if (height > 1 && gender === "Female") {
      return Math.round(
        (4.536 * weight + 15.88 * height - 5 * age - 161) * activity + +goal
      );
    }
  };

  const protein = () => {
    if (height > 1) {
      return Math.round((calories() * 0.22) / 4);
    }
  };

  const fat = () => {
    if (height > 1) {
      return Math.round((calories() * 0.3) / 9);
    }
  };

  const carbs = () => {
    if (height) {
      return Math.round((calories() * 0.48) / 4);
    }
  };

  return (
    <Container>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6 mt-1">
          <Form
            style={{
              backgroundColor: "rgba(255,255,255,.58",
              padding: "0.5em",
              boxShadow: "0 0.5em 1em 0",
            }}
          >
            <FormGroup>
              <h2 style={{ textAlign: "center", text: "underline" }}>
                Macro & Calorie Calculator
              </h2>
              <hr />

              <div className="concise">
                <Label for="exampleCheckbox2" style={{ paddingRight: "3em" }}>
                  Gender:
                </Label>

                {/* Radio Buttons for Male/Female */}

                <CustomInput
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="exampleCustomRadio5"
                  name="customRadio3"
                  label="Male"
                  value="Male"
                />
                <CustomInput
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="exampleCustomRadio6"
                  name="customRadio3"
                  label="Female"
                  value="Female"
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="Height">Height:</Label>
              <Input
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                type="number"
                required
                // name="customRadio2"
                id="height"
                placeholder="Enter your height in inches"
                value={height}
              />
              {/* <FormText>Enter your height in inches.</FormText> */}
            </FormGroup>
            <FormGroup>
              <Label for="Weight">Weight:</Label>
              <Input
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                type="number"
                // name="customRadio2"
                id="weight"
                placeholder="Enter your weight in pounds"
                value={weight}
              />
            </FormGroup>

            <FormGroup>
              <Label for="Age">Age:</Label>
              <Input
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="number"
                // name="customRadio2"
                id="age"
                placeholder="Enter your age in years"
                value={age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Activity">Activity Level:</Label>
              <div className="concise">
                <CustomInput
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="exampleCustomRadio"
                  name="activityRadio"
                  label="None"
                  value="1.2"
                />
                <CustomInput
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="exampleCustomRadio2"
                  name="activityRadio"
                  label="Low"
                  value="1.375"
                />
                <CustomInput
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="exampleCustomRadio3"
                  name="activityRadio"
                  label="Medium"
                  value="1.55"
                />
                <CustomInput
                  inline
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  type="radio"
                  id="exampleCustomRadio4"
                  name="activityRadio"
                  label="High"
                  value="1.725"
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleCheckbox2">What is your goal?</Label>
              <div className="concise">
                <CustomInput
                  inline
                  onClick={(e) => {
                    setGoal(e.target.value);
                  }}
                  type="radio"
                  id="exampleCustomRadio8"
                  name="goalRadio"
                  label="Gain Weight/Muscle"
                  value="250"
                />
                <CustomInput
                  inline
                  onClick={(e) => {
                    setGoal(e.target.value);
                  }}
                  type="radio"
                  id="exampleCustomRadio9"
                  name="goalRadio"
                  label="Maintain Weight"
                  value="0"
                />
                <CustomInput
                  inline
                  onClick={(e) => {
                    setGoal(e.target.value);
                  }}
                  type="radio"
                  id="exampleCustomRadio7"
                  name="goalRadio"
                  label="Lose Weight/Fat"
                  value="-500"
                />
              </div>
            </FormGroup>
            <hr />
            <h5 style={{ textAlign: "center", marginTop: "-0.5em" }}>
              Your optimized results are:
            </h5>
            <ul>
              <li>Calories: {calories()} per day</li>
              <li>Fat: {fat()} grams per day </li>
              <li>Carbs: {carbs()} grams per day </li>
              <li>Protein: {protein()} grams per day</li>
            </ul>
          </Form>

          {/* <Button color="primary" type="submit">
            Click to Submit
          </Button> */}
        </Col>
        <Col sm="3 pt-5">
          <div className="p-2 my-2 rounded">
            <Toast
              style={{
                boxShadow: "0 0.5em 1em 0",
                backgroundColor: "rgba(255,255,255,.8)",
              }}
            >
              <ToastHeader>Activity FAQ</ToastHeader>
              <ToastBody>
                Low activity = Light exercise/sports 1-3 days/week
                <hr />
                Medium activity = Moderate exercise/sports 3-5 days/week
                <hr />
                High activity = High intensity exercise/sports 6-7 days/week
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MacroCreate;
